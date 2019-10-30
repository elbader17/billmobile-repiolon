import React from 'react';
import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import ModalVoucherTYpe from './ModalVoucherType';
import InvoiceCustomer from './InvoiceCustomer';
import InvoiceItems from './InvoiceItems';
import { validateData, validateDni } from '../../utils/validations';
import { presentInvoiceDate } from '../../utils/date';
import { 
  messageItemsIncomplete, 
  messageCustomerIncomplete 
} from '../../utils/messagesNotifications';
import { IconDocument, IconAddCustomer, IconMore } from '../../constants/icons';
import { GRADIANTBLUE2, COLORGBL } from '../../constants/colors';
import { VOUCHER_TYPES } from '../../constants/invoice';
import { XY } from '../../constants/gradientCoord';
import style from './style';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { voucherType, fiscalIdentity } = this.props;
    this.state = {
      voucherType,
      invoiceDate: new Date(this.props.invoiceDate),
      fcIdentification: undefined,
      showCustomer: fiscalIdentity.name != '',
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      modalVisible: false, //Show Modal Voucher Type
      loading: false, //For buttons
      quantity: 1, //Cant items
      validIdentity: true,
    }
  }

  static navigationOptions = () => {
    return {
      title: 'Generación de Comprobante',
      headerTransparent: true,
      headerStyle: style.headerStyle,
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: IconDocument
    }  
  };

  setModalVisible = visible => this.setState({modalVisible: visible});
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  setFcIdentification = value => this.setState({ fcIdentification: value, validIdentity: true });
  setShowCustomer = value => this.setState({ showCustomer: value });
  setLoading = (bool) => this.setState({ loading: bool });
  
  navigateClient = () => {
    this.setShowCustomer(true);
    this.props.navigation.navigate('ListInvoiceCustomer');
  }
  navigateAddItems = () => this.props.navigation.navigate('ListInvoiceItem');
  navigateToSummaryInvoice = () => {
    const { showCustomer } = this.state;
    const { fiscalIdentity, items } = this.props;
    if (validateData(fiscalIdentity.name, items.length)){
      if (!showCustomer) {
        const customer = fiscalIdentity.name === 'fc' ? fiscalIdentity.identification : fiscalIdentity.name;
        const title = fiscalIdentity.name === 'fc' ? 'Consumidor Final: ' : 'Cliente: ' ;
        Alert.alert(
          title + customer,'El comprobante se confeccionará con éste Cliente',
          [
            { text: 'Cambiar', style: 'cancel' },
            { text: 'Continuar', onPress: () => this.props.navigation.navigate('InvoiceSummary') },
          ], {cancelable: false},
        );
      } 
      else this.props.navigation.navigate('InvoiceSummary');
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
    this.hideDateTimePicker();
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
  }

  incrementQuantity = () => { 
    this.setState({ quantity: this.state.quantity + 1 });
    this.updateInvoiceItemQuantity(this.props.invoiceId, this.state.quantity)
  }

  addFinalConsumer = () => {
    const { fcIdentification } = this.state;
    if (validateDni(fcIdentification)){
      const { fiscalIdentity, addFiscalIdentityToInvoice } = this.props;
      this.setLoading(true);
      addFiscalIdentityToInvoice('fc', fcIdentification, fiscalIdentity.id)
        .then(() => {
          this.setLoading(false);
          this.setShowCustomer(true)
        })
    } else {
      this.setState({validIdentity: false})
    }
  }

  renderViewItemsAdd = () => {
    return (
      <InvoiceItems
        items={this.props.items}
        total={this.props.invoiceTotal} 
        invoiceId ={this.props.invoiceId}
        incrementQuantity={this.incrementQuantity}
        quantity={this.state.quantity}
        deleteItem={this.props.deleteInvoiceItem}
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
        addFinalConsumer={this.addFinalConsumer}
        loading={this.state.loading}
        fiscalIdentity={this.props.fiscalIdentity}
      />
    );
  }

  render() {
    var date = presentInvoiceDate(this.state.invoiceDate);
    const { fiscalIdentity } = this.props;
    const { showCustomer, validIdentity } = this.state;
    const displayDni = validIdentity ? 'none' : 'flex';
    const typeCustomer = fiscalIdentity.name === 'fc' || !showCustomer ? 'Cosumidor Final' : 'Nombre Cliente';
    return(  
      <LinearGradient 
        colors={GRADIANTBLUE2} 
        style={style.container} 
        start={XY.startV} 
        end={XY.endV}>

        <View style={style.container}>
          <View style={style.containerBody}>
            
            <View style={style.containerReceptor}>
              <View style={style.inLineSpaceBetween}>
                <View style={style.boxVoucher}>
                  <Text style={[style.textRegular12White, {paddingBottom: 5}]}>
                    Tipo de Comprobante
                  </Text>
                  <Button
                    title={this.presentVoucherType()}
                    onPress={() => {this.setModalVisible(true)}}
                    buttonStyle={style.buttonVoucher}
                    titleStyle={style.textRegular16BlueCenter}
                  />
                </View>
                <View style={style.boxDate}>
                  <Text style={[style.textRegular12White, {paddingBottom: 5}]}>
                    Fecha de Emisión
                  </Text>
                  <Button
                    title={date}
                    onPress={this.showDateTimePicker}
                    buttonStyle={style.buttonDate}
                    titleStyle={style.textRegular16BlueCenter}
                  />
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    date={this.state.invoiceDate}
                  />
                </View>
              </View>
          
              <Text style={[style.textRegular12White, {paddingVertical: 5}]}>
                Datos del Receptor
              </Text>
              <View style={[style.containerCustomers,style.inColumnSpaceBetween]}>
                <View style={style.inLineSpaceBetween}>
                  <View style={style.textConsumerFinal}>
                    <Text style={style.textRegular16BlueMedium}>{typeCustomer}</Text>
                  </View>
                  <Button
                    title='Otro Cliente'
                    testID='addCustomer'
                    TouchableComponent={TouchableOpacity}
                    icon={IconAddCustomer}
                    onPress={ this.navigateClient }
                    buttonStyle={style.buttonAddCustomer}
                    titleStyle={style.textRegular12White}
                  />
                </View>
                
                <View style={{height: 4, left: 2, display: displayDni }}>
                  <Text style={style.textRegular12Red}>
                    Documento Inválido
                  </Text>
                </View>
                
                { this.renderCustomer() }
              
              </View>

              <Button
                title=' Agregar Producto/Servicio'
                TouchableComponent={TouchableOpacity}
                onPress={ this.navigateAddItems }
                icon={IconMore}
                buttonStyle={style.buttonAdd}  
                titleStyle={ style.textRegular16White }
                disabledStyle={style.buttonAddDisabled}
                disabledTitleStyle = { style.textRegular16GrayLight }
                ViewComponent={LinearGradient}
                linearGradientProps={COLORGBL}
              />

              <Text style={[style.textRegular12White, {paddingTop: 8}]}>
                Detalle Producto/Servicio
              </Text>

              { this.renderViewItemsAdd() }

            </View>
          </View>

          <View style={style.containerFooter}>
            <Button
              title='Continuar'
              TouchableComponent={TouchableOpacity}
              onPress={ this.navigateToSummaryInvoice }
              buttonStyle={style.buttonContinue}  
              titleStyle={ style.textRegular16White }
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGBL}
            />
          </View>

          <Modal visible={this.state.modalVisible} animationType="fade" transparent={true}>
            <ModalVoucherTYpe selectionVoucher={this.selectionVoucher}/>
          </Modal>

        </View>
      </LinearGradient>
    )
  }
}

export default Invoice;