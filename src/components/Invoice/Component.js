import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import InvoiceItems from './InvoiceItems';
import InvoiceCustomer from './InvoiceCustomer';
import { presentInvoiceDate } from '../../utils/date';
import { validateData } from '../../utils/validations';
import { GRADIANTBLUE, COLORS, COLORGY, GRADIANTBLUE1, GRADIANTBLUE2, COLORGBL } from '../../constants/colors';
import { VOUCHER_TYPES } from '../../constants/invoice';
import style from './style';
import { 
  messageItemsIncomplete, 
  messageCustomerIncomplete 
} from '../../utils/messagesNotifications';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { voucherType } = this.props;
    this.state = {
      voucherType,
      invoiceDate: new Date(this.props.invoiceDate),
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      modalVisible: false, //Modal voucher type
      fcIdentification: undefined,
      showFinalConsumer: this.props.fiscalIdentity ? false : true,
      loading: false, //for buttons
      quantity: 1, //Cant items
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Generación de Comprobante',
      headerTransparent: true,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: (
        <Icon type='antdesign' name="filetext1" size={20} color={COLORS.blueLight} iconStyle={{marginLeft:20}}/>
      )
    }  
  };

  setModalVisible = visible => this.setState({modalVisible: visible});
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  setFcIdentification = value => this.setState({ fcIdentification: value });
  setShowFinalConsumer = value => this.setState({ showFinalConsumer: value });
  setLoading = (bool) => this.setState({ loading: bool });
  navigateClient = () => {
    this.props.navigation.navigate('ListInvoiceCustomer');
    this.setShowFinalConsumer(false);
  }
  navigateAddItems = () => this.props.navigation.navigate('ListInvoiceItem');
  navigateToSummaryInvoice = () => {
    if (validateData(this.props.fiscalIdentity.name, this.props.items.length))
      this.props.navigation.navigate('InvoiceSummary');
    else if (this.props.fiscalIdentity.name != '') showMessage(messageItemsIncomplete);
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
    if (invoiceId != null) {
      updateInvoice(values);
    } else {
      createInvoice(invoiceDate, voucherType);
    }
  };

  presentVoucherType = () => {
    const { voucherType } = this.state;
    return VOUCHER_TYPES.find((v) => v.value === voucherType).label;
  }

  selectionVoucher = (voucherType) => {
    this.setModalVisible(!this.state.modalVisible);
    this.setState({voucherType: voucherType.value });
  }

  addFinalConsumer = () => {
    const { fcIdentification } = this.state;
    const {
      fiscalIdentity,
      addFiscalIdentityToInvoice,
    } = this.props;
    this.setLoading(true);
    addFiscalIdentityToInvoice('fc', fcIdentification, fiscalIdentity.id)
      .then(() => {
        this.setLoading(false);
        this.setShowFinalConsumer(false)
      })
  }

  incrementQuantity = () => { 
    this.setState({ quantity: this.state.quantity + 1 });
    this.updateInvoiceItemQuantity(this.props.invoiceId, this.state.quantity)
  }

  renderViewItemsAdd = () => {
    if (this.props.items.length != 0) {
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
    else return (
      <View style={style.containerItemsInvoice}>
        <View style={{marginVertical: 15, alignItems:'center'}}>
          <Text style={style.textRegular16BlueMedium}>
            No se han añadido Productos/Servicios
          </Text>
        </View>
      </View>
    )
  }

  renderCustomer = () => {
    return(
      <InvoiceCustomer 
        showFinalConsumer={this.state.showFinalConsumer}
        setShowFinalConsumer={this.setShowFinalConsumer}
        setFinalConsumer={this.setFcIdentification}
        identity={this.state.fcIdentification} 
        addFinalConsumer={this.addFinalConsumer}
        loading={this.state.loading}
        fiscalIdentity={this.props.fiscalIdentity}
      />
    );
  }

  render() {
    const { fiscalIdentity } = this.props;
    const typeCustomer = fiscalIdentity.name === 'fc' || this.state.showFinalConsumer ? 'Cosumidor Final' : 'Nombre Cliente';
    const iconAddCustomer = <Icon type='antdesign' name="adduser" size={17} color={COLORS.blueMedium} />
    var date = presentInvoiceDate(this.state.invoiceDate);
    return(  
      <LinearGradient colors={GRADIANTBLUE2} 
        style={{flex:1}} start={{x: 1, y: 1}} end={{x: 1, y: 0}}
      >
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
                  icon={iconAddCustomer}
                  onPress={ this.navigateClient }
                  buttonStyle={style.buttonAddCustomer}
                  titleStyle={style.textRegular12Blue}
                />
              </View>
              { this.renderCustomer() }
            </View>

            <Button
              title=' Agregar Items'
              TouchableComponent={TouchableOpacity}
              onPress={ this.navigateAddItems }
              icon={<Icon type='antdesign' name="plus" size={15} color="white"/>}
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={style.modalVoucher}>
            <View style={style.boxModal}>
              <View style={style.headerModal}>
                <Text style={style.textRegular16White}>Tipo de Comprobante</Text>
              </View>
              <View style={style.boxVoucherType}>
                {VOUCHER_TYPES.map((voucherType, index) => (
                <View key={index}>
                  <TouchableOpacity
                    style={[style.borderVoucher,style.marginVertical8]}
                    onPress={() => this.selectionVoucher(voucherType)}
                  >
                    <Text style={style.textRegular16BlueMedium}>
                      {voucherType.label}
                    </Text>
                  </TouchableOpacity>
                </View>
                ))}
              </View>
            </View>
          </View>
        </Modal>

      </View>
      </LinearGradient>
    )
  }
}

export default Invoice;