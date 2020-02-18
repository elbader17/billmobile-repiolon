import React from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import ModalVoucherTYpe from './ModalVoucherType';
import InvoiceCustomer from './InvoiceCustomer';
import InvoiceItems from './InvoiceItems';
import { validateData } from '../../utils/validations';
import { rankMaxDateBill, rankMinDateBill } from '../../utils/date';
import { 
  messageItemsIncomplete, 
  messageCustomerIncomplete,
  messageRequestData 
} from '../../utils/messagesNotifications';
import { IconDocument, IconAddCustomer, IconMore, IconBottom } from '../../constants/icons';
import { VOUCHER_TYPES } from '../../constants/invoice';
import style from './style';
import { COLORS } from '../../constants/colors';

const defaultCustomer = {
  attributes: {
    name: '',
    identification: '',
    category: 'fc',
  }
}

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { voucherType, fiscalIdentity } = this.props;
    this.state = {
      voucherType,
      invoiceDate: this.props.invoiceDate,
      fcIdentification: undefined,
      showCustomer: fiscalIdentity.name != '',
      modalVisible: false, //Show Modal Voucher Type
      loadingFC: false, //For add final consumer
      loadingContinue: false,
      quantity: 1, //Cant items
      validIdentity: true,
    }
  }

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
  navigateAddItems = () => this.props.navigation.navigate('ListInvoiceItem');
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
  
  handleDatePicked = (date) => {
    this.setState({ invoiceDate: date });
    this.createOrUpdateInvoice({ invoiceDate: date });
  }

  createOrUpdateInvoice = (values) => {
    const { updateInvoice, createInvoice, invoiceId } = this.props;
    const { invoiceDate, voucherType } = this.state ;
    if (invoiceId != null) updateInvoice(values);
    else createInvoice(invoiceDate, voucherType);
  };

  presentVoucherType = () => {
    const { voucherType } = this.state;
    return VOUCHER_TYPES.find((v) => v.value === voucherType).label;
  }

  selectionVoucher = (voucherType) => {
    this.setModalVisible(!this.state.modalVisible);
    this.setState({voucherType: voucherType.value });
    this.createOrUpdateInvoice({ voucherType: voucherType.value });
  }

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
            this.setState({loadingFC: true})
            this.props.addFiscalIdentityToInvoice('fc', 'fc', 'fc')
              .then(()=> this.setState({loadingFC: false, showCustomer: true}))
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

  render() {
    const buttonAddCustomerDidabled = this.state.showCustomer || this.state.loadingFC;
    const displayRenderCustomer = this.state.showCustomer ? 'flex' : 'none';
    const colorIconAddCustomer = buttonAddCustomerDidabled ? COLORS.grayDark : COLORS.white;
    return(  
      <View style={style.container}>
        
          <View style={style.containerBody}>
            <View style={style.containerInvoiceHeader}>
              
              <View style={[style.inLineSpaceBetween,{margin: 7}]}>
                <View style={style.boxVoucher}>
                  <Text style={[style.textRegular12GrayDark,{marginLeft: 7}]}>
                    Tipo de Comprobante
                  </Text>
                  <Button
                    title={this.presentVoucherType()}
                    icon={IconBottom}
                    iconRight
                    TouchableComponent={TouchableOpacity}
                    onPress={() => {this.setModalVisible(true)}}
                    buttonStyle={style.buttonVoucher}
                    titleStyle={style.textRegular14White}
                  />
                </View>
                <View style={style.boxDate}>
                  <Text style={[style.textRegular12GrayDark,{textAlign: 'center'}]}>
                    Fecha de Emisión
                  </Text>
    
                  <DatePicker
                    style={{width: '100%'}}
                    date={this.state.invoiceDate}
                    mode="date"
                    format="YYYY-MM-DD"
                    minDate= {rankMinDateBill(this.props.items)}
                    maxDate= {rankMaxDateBill(this.props.items)}
                    showIcon={false}
                    customStyles={{
                      dateText: style.textRegular14White,
                      dateInput: style.buttonDate
                    }}
                    onDateChange={(date) => {this.handleDatePicked(date)}}
                  />
                </View>
              </View>

            </View>
            
            <Text style={[style.textRegular12GrayDark, {textAlign:'center', marginTop: 5}]}>
                Datos del Receptor
            </Text>
            <View style={style.containerInvoiceBody}>
          
              <View style={{display: displayRenderCustomer}}>
                { this.renderCustomer() }
              </View>
              
              <View style={style.inLineSpaceAround}>
                <Button
                  title=' Consumidor Final'
                  testID='addCustomer'
                  TouchableComponent={TouchableOpacity}
                  icon={<IconAddCustomer color={colorIconAddCustomer}/>}
                  onPress={ () => this.addFinalConsumer(defaultCustomer) }
                  buttonStyle={style.buttonDataReceiver}
                  titleStyle={style.textRegular14White}
                  disabled={buttonAddCustomerDidabled }
                  loading={this.state.loadingFC}
                />

                <Button
                  title=' Otro Cliente'
                  testID='addCustomer'
                  TouchableComponent={TouchableOpacity}
                  icon={<IconAddCustomer color={colorIconAddCustomer}/>}
                  onPress={ this.navigateClient }
                  buttonStyle={style.buttonAddCustomer}
                  disabled={buttonAddCustomerDidabled }
                  titleStyle={style.textRegular14White}
                /> 
              </View>
          
            </View>

            <Text style={[style.textRegular12GrayDark, {textAlign:'center', marginTop: 5}]}>
                Detalle Producto / Servicio
            </Text>
            <View style={style.containerInvoiceFooter}>
              
              <View>
                {this.renderViewItemsAdd()}
              </View>

              <Button
                title=' Agregar Producto/Servicio'
                TouchableComponent={TouchableOpacity}
                onPress={ this.navigateAddItems }
                icon={IconMore}
                buttonStyle={style.buttonAdd}  
                titleStyle={ style.textRegular14White }
                disabledStyle={style.buttonAddDisabled}
                disabledTitleStyle = { style.textRegular16GrayLight }
              />

            </View>
            
          </View>

          <View style={style.containerFooter}>
            <Button
              title='Continuar'
              TouchableComponent={TouchableOpacity}
              onPress={ this.navigateToSummaryInvoice }
              buttonStyle={style.buttonContinue}  
              titleStyle={ style.textBold16White }
              loading={this.state.loadingContinue}
            />
          </View>

          <Modal 
            visible={this.state.modalVisible} 
            animationType='slide' 
            transparent={true}
            onRequestClose={() => this.setState({ modalVisible: false })}
          >
            <ModalVoucherTYpe selectionVoucher={this.selectionVoucher}/>
          </Modal>

      </View>
    )
  }
}

export default Invoice;