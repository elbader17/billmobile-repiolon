import React from 'react';
import { View, TouchableOpacity, Alert, Text } from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import InvoiceCustomer from './InvoiceCustomer';
import InvoiceItems from './InvoiceItems';
import { validateData } from '../../utils/validations';
import { 
  messageItemsIncomplete, 
  messageCustomerIncomplete,
  messageRequestData 
} from '../../utils/messagesNotifications';
import { IconDocument, IconBottom, IconNewInvoice, } from '../../constants/icons';
import style from './style';
import InitInvoice from './InitInvoice';
import EndInvoice from './EndInvoice';
import { COLORS } from '../../constants/colors';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { voucherType, fiscalIdentity, conditionSale, invoiceDate } = this.props;
    this.state = {
      voucherType: voucherType,
      invoiceDate: invoiceDate,
      fcIdentification: undefined,
      showCustomer: fiscalIdentity.name != '',
      conditionSale: conditionSale,
      loadingFC: false, //For add final consumer
      loadingContinue: false,
      quantity: 1, //Cant items
      validIdentity: true,
      concept: this.props.concept,
      dateDisabled: this.props.items.length === 0,
      renderInitInvoice: false,
      renderEndInvoice: this.props.invoiceId != null,
      renderButtonsNewDraft: this.props.invoiceId === null,
      salePoint: 1,
      dateFrom: this.props.dateFrom,
      dateTo: this.props.dateTo,
      paymentExpire: this.props.paymentExpire,
    }
  }

  /*componentDidUpdate(prev_props) {
    if(this.props.invoiceId != null){
      var afterProp = this.props.items.length;
      var beforeProp = prev_props.items.length;
      if ((beforeProp == 0 && afterProp != 0)||(beforeProp != 0 && afterProp == 0)){
        this.setState({
          dateDisabled: !this.state.dateDisabled,
          invoiceDate: new Date()
        })
        this.props.updateInvoice({
          invoiceDate: new Date(),
          voucherType: this.state.voucherType,
          conditionSale: this.state.conditionSale
        })
      }
    }
  }*/

  static navigationOptions = () => {
    return {
      title: 'Generación de Comprobante',
      headerTitleStyle: style.headerText,
      headerLeft: IconDocument
    }  
  };

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
  navigateAddItems = () => this.props.navigation.navigate('ListInvoiceItem', {concept: this.state.concept});
  navigateToSummaryInvoice = () => {
    const { showCustomer } = this.state;
    const { fiscalIdentity, items } = this.props;
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
        this.props.getInvoice(this.props.invoiceId)
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

  updateInvoiceItemQuantity = (invoiceItemId, quantity) => {
    const { updateInvoiceItemQuantity } = this.props;
    updateInvoiceItemQuantity(invoiceItemId, quantity);
  }
  
  createOrUpdateInvoice = (values) => {
    const { updateInvoice, createInvoice, invoiceId } = this.props;
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

  addFinalConsumer = (customer) => {
    Alert.alert(
      '¿Desea Completar los Datos del Receptor?','Deberá ingresar el DNI, Nombre y Apellido, y Domicilio Comercial del Receptor',
      [
        { 
          text: 'Completar', 
          onPress: () => {
            this.setShowCustomer(true);
            this.props.navigation.navigate(
              'NewInvoiceCustomer',
              {customer, dataReceiver: true}
            );
          }
        },
        { 
          text: 'No Completar', 
          onPress: () => {
            this.setState({loadingFC: true, showCustomer: true})
            this.props.addFiscalIdentityToInvoice('fc', 'fc', 'fc')
              .then(()=> this.setState({loadingFC: false}))
          },
          style: 'cancel',
        },
      ], {cancelable: false},
    );
  }

  renderViewItemsAdd = () => {
    return (
      <InvoiceItems
        items={this.props.items}
        total={this.props.invoiceTotal} 
        invoiceId ={this.props.invoiceId}
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
        showCustomer={this.state.showCustomer}
        setShowCustomer={this.setShowCustomer}
        setFinalConsumer={this.setFcIdentification}
        identity={this.state.fcIdentification} 
        loading={this.state.loading}
        fiscalIdentity={this.props.fiscalIdentity}
      />
    );
  }

  createInvoice = () => {
    const dateOk = (new Date(this.state.invoiceDate)).getTime() > (new Date(this.state.paymentExpire)).getTime() ? this.state.invoiceDate : this.state.paymentExpire;
    const isProducts = this.state.concept === 'products';
    console.log(dateOk);
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
      resetCurrentInvoice={this.props.resetCurrentInvoice}
    />
  )

  setRenderEndInvoice = value => {this.setState({renderEndInvoice: value })}
  
  renderNewInvoiceEnd = () => (
    <EndInvoice
      showCustomer={this.state.showCustomer}
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
      resetCurrentInvoice={this.props.resetCurrentInvoice}
    />
  )
  
  render() {
    console.log(this.state.invoiceDate, this.props.invoiceDate)
    console.log(this.props.user);
    const canCreateInvoice = this.props.user.cert;
    const displayButtonsInit = this.state.renderButtonsNewDraft ? 'flex' : 'none';
    return(
      <View style={style.container}>
        <View style={{alignItems: 'center'}}>  
          <TouchableOpacity 
            onPress={() => {this.setState({renderInitInvoice: true, renderButtonsNewDraft: false})}}
            style={[style.buttonNewInvoice,{display: displayButtonsInit, justifyContent: 'center'}]}
            disabled={!canCreateInvoice}
          >
            <View style={style.inColumn}>
              {<IconNewInvoice 
                size={100} 
                color={canCreateInvoice ?  COLORS.blueLight : COLORS.gray} 
                iconStyle={{marginBottom: 15}} 
              />}
              <Text style={canCreateInvoice ? style.textRegular20Blue : style.textRegular20GrayDark}>
                Nuevo Comprobante
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{display: canCreateInvoice ? 'none':'flex'}}>
          <Text style={[style.textRegular14GrayDark, {textAlign: 'center', paddingHorizontal: 15, marginTop: 10}]}>
            ¡Para poder facturar debe cargar su Clave Fiscal y esperar a ser autorizado!
          </Text>
        </View>
        {this.state.renderInitInvoice ? this.renderNewInvoiceInit() : null }
        {this.state.renderEndInvoice ? this.renderNewInvoiceEnd() : null }
      </View>
    )
  }
}

export default Invoice;