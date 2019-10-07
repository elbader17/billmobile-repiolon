import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native-elements";
import InvoiceItems from './InvoiceItems';
import InvoiceCustomer from './InvoiceCustomer';
import { presentInvoiceDate } from '../../utils/date';
import { validateData } from '../../utils/validations';
import { GRADIANTBLUE, COLORS, COLORGY } from '../../constants/colors';
import { VOUCHER_TYPES } from '../../constants/invoice';
import style from './style';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { voucherType } = this.props;
    this.state = {
      voucherType,
      invoiceDate: new Date(),
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      modalVisible: false, //Modal voucher type
      fcIdentification: undefined,
      showFinalConsumer: this.props.fiscalIdentity ? false : true,
      loading: false //for buttons
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
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
        </TouchableOpacity> 
      )
    }  
  };

  setModalVisible = visible => this.setState({modalVisible: visible});
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  setFcIdentification = value => this.setState({ fcIdentification: value });
  setShowFinalConsumer = value => this.setState({ showFinalConsumer: value });
  setLoading = (bool) => this.setState({ loading: bool });
  navigateClient = () => {
    this.props.navigation.navigate('ListInvoiceCustomer');
    this.setShowFinalConsumer(false);
  }
  navigateAddItems = () => this.props.navigation.navigate('ListInvoiceItem');
  navigateToBewInvoice = () => this.props.navigation.navigate('InvoiceSummary');
  
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

  renderViewItemsAdd = () => {
    if (this.props.items.length != 0) {
      return (
        <InvoiceItems
          items={this.props.items}
          total={this.props.invoiceTotal} 
          onPress={this.updateInvoiceItemQuantity} 
        />
      );
    }
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
    const iconAddCustomer = <Icon name="adduser" size={17} color={COLORS.blueMedium} />
    return(  
      <LinearGradient colors={GRADIANTBLUE} style={{flex:1}} start={{x: 0, y: 1}} end={{x: 1, y: 0.9}}>
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
                  title={presentInvoiceDate(this.state.invoiceDate)}
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
              onPress={ this.navigateAddItems }
              icon={<Icon name="plus" size={15} color="white"/>}
              buttonStyle={style.buttonAdd}  
              titleStyle={ style.textRegular16White }
              disabledStyle={style.buttonAddDisabled}
              disabledTitleStyle = { style.textRegular16GrayLight }
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGY}
            />

          { this.renderViewItemsAdd() }
          </View>
        </View>

        <View style={style.containerFooter}>
          <Button
            title='Continuar'
            onPress={ this.navigateToBewInvoice }
            buttonStyle={style.buttonContinue}  
            titleStyle={ style.textRegular16White }
            disabled={ !validateData(this.props.fiscalIdentity.name, this.props.items.length) }
            disabledStyle={style.buttonContinueDisabled}
            disabledTitleStyle = { style.textRegular16GrayLight }
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGY}
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