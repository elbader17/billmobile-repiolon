import React from 'react';
import { View, TouchableOpacity, Alert, Text, Modal } from 'react-native';
import { showMessage } from "react-native-flash-message";
import InvoiceCustomer from './InvoiceCustomer';
import InvoiceItems from './InvoiceItems';
import { validateData } from '../../utils/validations';
import { 
  messageItemsIncomplete, 
  messageCustomerIncomplete,
  messageRequestData 
} from '../../utils/messagesNotifications';
import { invoiceDateString } from '../../utils/date';
import ModalInvoicesExisting from './ModalInvoicesExisting';
import { IconDocument, IconNewInvoice, IconExistente, } from '../../constants/icons';
import style from './style';
import InitInvoice from './InitInvoice';
import EndInvoice from './EndInvoice';
import { presentInvoiceDate } from '../../utils/date'
import { COLORS } from '../../constants/colors';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { voucherType, fiscalIdentity, conditionSale, invoiceDate } = this.props;
    this.state = {
      voucherType: voucherType,
      fiscalIdentity: fiscalIdentity,
      showCustomer: fiscalIdentity != null ? true : false,
      invoiceId: this.props.invoiceId,
      invoiceDate: invoiceDate,
      fcIdentification: undefined,
      conditionSale: conditionSale,
      loadingFC: false, //For add final consumer
      loadingContinue: false,
      loadingInvoices: false,
      quantity: 1, //Cant items
      validIdentity: true,
      concept: this.props.concept,
      dateDisabled: this.props.items.length === 0,
      renderInitInvoice: false,
      renderEndInvoice: this.props.invoiceId != null,
      renderButtonsNewDraft: this.props.invoiceId === null,
      renderItems: false,
      salePoint: 1,
      dateFrom: this.props.dateFrom,
      dateTo: this.props.dateTo,
      paymentExpire: this.props.paymentExpire,
      modalVisible: false
    }
  }

  static navigationOptions = () => {
    return {
      title: 'Generación de Comprobante',
      headerTitleStyle: style.headerText,
      headerLeft: IconDocument
    }  
  };

  setStateCurrentInvoice = () => {
    this.setState({
      invoiceDate: invoiceDateString(),
      dateFrom: invoiceDateString(),
      dateTo: invoiceDateString(),
      paymentExpire: invoiceDateString(),
      voucherType: '11',
      conditionSale: 'cdo',
      concept: 'Productos',
      showCustomer: false,
      invoiceId: null
    })
  }

  setModalVisible = visible => this.setState({modalVisible: visible});
  setFcIdentification = value => this.setState({ fcIdentification: value, validIdentity: true });
  setShowCustomer = value => this.setState({ showCustomer: value });
  setLoading = (bool) => this.setState({ loading: bool });
  
  navigateClient = () => {
    this.setShowCustomer(true);
    this.props.navigation.navigate('ListInvoiceCustomer');
  }
  navigateToEditItem = (item) => {
    this.props.navigation.navigate('EditInvoiceItem', { item });
  }
  navigateAddItems = () => this.props.navigation.navigate('ListInvoiceItem', {concept: this.state.concept, invoiceId: this.state.ivoiceId});
  navigateToSummaryInvoice = () => {
    const { showCustomer } = this.state;
    const { fiscalIdentity, items } = this.props;
    if (fiscalIdentity === null) {
      showMessage(messageCustomerIncomplete)
    } else {

    if (validateData(fiscalIdentity.name, items.length)){
      if (!showCustomer && this.props.invoiceTotal > 10000 && fiscalIdentity.identification != 'fc') {
        const customer = fiscalIdentity.name === 'fc' ? fiscalIdentity.identification : fiscalIdentity.name;
        const title = fiscalIdentity.name === 'fc' ? 'Consumidor Final: ' : 'Cliente: ' ;
        Alert.alert(
          title + customer,'El comprobante se confeccionará con éste Cliente',
          [
            { text: 'No Continuar', style: 'cancel' },
            { text: 'Continuar', onPress: () => this.props.navigation.navigate('InvoiceSummary') },
          ], {cancelable: false},
        );
      } 
      else {
        this.setState({loadingContinue: true})
        this.props.getInvoice(this.state.invoiceId)
          .then(() => {
            if (this.props.invoiceTotal > 10000 && this.props.fiscalIdentity.identification == 'fc') {
              const customer = {
                id: this.props.fiscalIdentity.id,
                attributes: {
                  name: '',
                  identification: '',
                  category: 'fc'
                }
              }
              this.setState({loadingContinue: false});
              showMessage(messageRequestData);
              this.props.navigation.navigate(
                'EditInvoiceCustomer',
                {customer, dataReceiver: true}
              );
            } else {
              this.props.navigation.navigate('InvoiceSummary')
              this.setState({loadingContinue: false})
            }
          })
      }
    } else 
      if (fiscalIdentity.name != '') 
        showMessage(messageItemsIncomplete);
      else showMessage(messageCustomerIncomplete)
    }
  }

  updateInvoiceItemQuantity = (invoiceItemId, quantity) => {
    const { updateInvoiceItemQuantity } = this.props;
    updateInvoiceItemQuantity(invoiceItemId, quantity);
  }
  
  createOrUpdateInvoice = (values) => {
    const { updateInvoice, createInvoice} = this.props;
    const { invoiceId } = this.state;
    console.log(invoiceId);
    if (invoiceId != null) {
      updateInvoice(values)
        .then(() => {
          this.setState({
            renderEndInvoice: true, 
            renderInitInvoice: false,
            loadingContinue: false
          });
        });
    } 
    else {
      createInvoice(
        values.invoiceDate, 
        values.voucherType, 
        values.conditionSale, 
        values.dateFrom, 
        values.dateTo, 
        values.paymentExpire,
        values.concept
      )
        .then(() => {
          this.setState({
            renderEndInvoice: true, 
            renderInitInvoice: false,
            loadingContinue: false
          });
        });
    }
  };

  addFinalConsumer = () => {
    Alert.alert(
      '¿Desea Completar los Datos del Receptor?','Deberá ingresar el DNI, Nombre y Apellido, y Domicilio Comercial del Receptor',
      [
        { 
          text: 'Completar', 
          onPress: () => {
            this.setState({showCustomer: true})
            this.props.navigation.navigate(
              'NewInvoiceCustomer',
              {dataReceiver: true, customer: { attributes: {name:'', category: 'fc', identification: ''}}}
            );
          }
        },
        { 
          text: 'No Completar', 
          onPress: () => {
            this.setState({loadingFC: true,  showCustomer: true})
            this.props.addFiscalIdentityToInvoice('fc', 'fc', 'fc')
              .then(()=> this.setState({loadingFC: false}))
          },
          style: 'cancel',
        },
      ], {cancelable: false},
    );
  }

  renderViewItemsAdd = () => {
    console.log(this.state.invoiceId, this.props.invoiceId)
    return (
      <InvoiceItems
        items={this.props.items}
        total={this.props.invoiceTotal}
        invoiceId ={this.state.invoiceId}
        updateInvoiceItemQuantity={this.props.updateInvoiceItemQuantity}
        quantity={this.state.quantity}
        deleteItem={this.props.deleteInvoiceItem}
        getInvoiceItems = {this.props.getInvoiceItems}
        navigateToEditItem = {this.navigateToEditItem}
      />
    ); 
  }

  renderCustomer = () => {
    return(
      <InvoiceCustomer 
        setCurrentInvoiceId={this.props.setCurrentInvoiceId}
        setFinalConsumer={this.setFcIdentification}
        setShowCustomer={this.setShowCustomer}
        identity={this.state.fcIdentification} 
        loading={this.state.loading}
        fiscalIdentity={this.props.fiscalIdentity}
      />
    );
  }

  createInvoice = () => {
    const dateOk = (new Date(this.state.invoiceDate)).getTime() > (new Date(this.state.paymentExpire)).getTime() ? this.state.invoiceDate : this.state.paymentExpire;
    const isProducts = this.state.concept === 'products';
    this.setState({loadingContinue: true});
    this.createOrUpdateInvoice({ 
      invoiceDate: this.state.invoiceDate,
      voucherType: this.state.voucherType,
      conditionSale: this.state.conditionSale,
      dateFrom: isProducts ? null : this.state.dateFrom,
      dateTo: isProducts ? null : this.state.dateTo,
      paymentExpire: isProducts ? null : dateOk,
      concept: this.state.concept
    })
  };
  
  setSalePoint = value => {this.setState({salePoint: value})}
  setConditionSale = value => {this.setState({conditionSale: value})}
  setInvoiceDate = value => {this.setState({invoiceDate: value})}
  setVoucherType = value => {this.setState({voucherType: value})}
  setConcept = value => {this.setState({concept: value})}
  setRenderInitInvoice = value => {this.setState({renderInitInvoice: value })}
  setRenderButtonsNewDraft = value => {this.setState({renderButtonsNewDraft: value })}
  setDate = (from, to, expire) => {this.setState({dateFrom: from, dateTo: to, paymentExpire: expire})}
  
  setInvoice = () => {
    this.setState({
      invoiceItems: [],
      invoiceDate: invoiceDateString(),
      voucherType: '11',
      conditionSale: 'cdo',
      concept: 'Productos',
      id: null,
      total: 0.0,
      url: '',
      dateFrom: invoiceDateString(),
      dateTo: invoiceDateString(),
      paymentExpire: invoiceDateString()
    })
    this.props.resetCurrentInvoice()
  }

  renderNewInvoiceInit = () => (
    <InitInvoice
      user={this.props.user}
      concept={this.state.concept}
      setConcept={this.setConcept}
      salePoint={this.state.salePoint}
      setSalePoint={this.setSalePoint}
      voucherType={this.state.voucherType}
      setVoucherType={this.setVoucherType}
      conditionSale={this.state.conditionSale}
      setConditionSale={this.setConditionSale}
      invoiceDate={this.state.invoiceDate}
      setInvoiceDate={this.setInvoiceDate}
      invoiceId={this.props.invoiceId}
      setRenderInitInvoice={this.setRenderInitInvoice}
      setRenderEndInvoice={this.setRenderEndInvoice}
      setRenderButtonsNewDraft={this.setRenderButtonsNewDraft}
      createInvoice={this.createInvoice}
      loadingContinue={this.state.loadingContinue}
      dateFrom={this.state.dateFrom}
      dateTo={this.state.dateTo}
      paymentExpire={this.state.paymentExpire}
      setDate={this.setDate}
      resetCurrentInvoice={this.setInvoice}
      setStateCurrentInvoice={this.setStateCurrentInvoice}
    />
  )

  setRenderEndInvoice = value => {this.setState({renderEndInvoice: value })}
  
  renderNewInvoiceEnd = () => {
    return (
      <EndInvoice
        fiscalIdentity={this.props.fiscalIdentity}
        showCustomer={this.state.showCustomer}
        renderItems={this.renderItems}
        loadingFC={this.state.loadingFC}
        addFinalConsumer={this.addFinalConsumer}
        navigateClient={this.navigateClient}
        renderViewItemsAdd={this.renderViewItemsAdd}
        renderCustomer={this.renderCustomer}
        navigateAddItems={this.navigateAddItems}
        setRenderEndInvoice={this.setRenderEndInvoice}
        setRenderInitInvoice={this.setRenderInitInvoice}
        setRenderButtonsNewDraft={this.setRenderButtonsNewDraft}
        navigateToSummaryInvoice={this.navigateToSummaryInvoice}
        loadingContinue={this.state.loadingContinue}
        resetCurrentInvoice={this.setInvoice}
        setStateCurrentInvoice={this.setStateCurrentInvoice}
        getInvoiceItems={this.props.getInvoiceItems}
      />
    );
  }

  getFiscalInvoices = () => {
    this.setModalVisible(true);
    this.setState({loadingInvoices: true})
    this.props.listInvoice()
      .then(() => 
        this.props.getFiscalIdentitiesInvoices()
         .then(() => this.setState({loadingInvoices: false}))
      )
  }

  loadInvoice = (invoice, fiscalIdentity) => {
    const { concept, condition_sale, state, date_from, date_to, payment_expiration, invoice_date, invoice_type, total } = invoice.attributes;
    const id = state != 'processed' ? invoice.id : null;
    this.setState({
      renderInitInvoice: true, 
      renderButtonsNewDraft: false,
      dateFrom: presentInvoiceDate(date_from),
      dateTo: presentInvoiceDate(date_to),
      paymentExpire: presentInvoiceDate(payment_expiration),
      invoiceDate: presentInvoiceDate(invoice_date),
      voucherType: invoice_type,
      invoiceTotal: total,
      concept: concept,
      conditionSale: condition_sale,
      fiscalIdentity: fiscalIdentity,
      invoiceId: id,
      showCustomer: fiscalIdentity != null ? true : false
    });
  }

  setModalVisible = value => {this.setState({modalVisible: value})} 
  
  render() {
    console.log(this.props.invoicesFI);
    const displayButtonsInit = this.state.renderButtonsNewDraft ? 'flex' : 'none';
    return(
      <View style={style.container}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, display: displayButtonsInit}}>  
          <TouchableOpacity 
            onPress={() => {this.setState({renderInitInvoice: true, renderButtonsNewDraft: false})}}
            style={style.buttonNewInvoice}
          >
            <View style={style.inColumn}>
              {<IconNewInvoice 
                size={100} 
                color={COLORS.blueLight} 
                iconStyle={{marginBottom: 15}} 
              />}
              <Text style={style.textRegular20Blue}>
                Nuevo Comprobante
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'flex-start', flex: 1, display: displayButtonsInit}}>
          <TouchableOpacity 
            onPress={() => this.getFiscalInvoices()}
            style={style.buttonNewInvoice}
            >
            <View style={style.inColumn}>
              {<IconExistente
                size={100} 
                color={COLORS.blueLight} 
                iconStyle={{marginBottom: 15}} 
                />}
              <Text style={style.textRegular20Blue}>
                Cargar Existente
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.state.renderInitInvoice ? this.renderNewInvoiceInit() : null }
        {this.state.renderEndInvoice ? this.renderNewInvoiceEnd() : null }
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <ModalInvoicesExisting 
            setModalVisible={this.setModalVisible}
            invoices={this.props.invoices}
            customers={this.props.invoicesFI}
            loading={this.state.loadingInvoices}
            loadInvoice={this.loadInvoice}
            setCurrentInvoiceId={this.props.setCurrentInvoiceId}
            deleteInvoice={this.props.deleteInvoice}
          />
        </Modal>

      </View>
    )
  }
}

export default Invoice;