import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import { Button } from "react-native-elements";
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import InvoiceItems from './InvoiceItems';
import InvoiceCustomer from './InvoiceCustomer';
import style from './style';
import { VOUCHER_TYPES } from '../../constants/invoice';
import { validateData } from '../../utils/validations';
import { presentInvoiceDate } from '../../utils/date';
import { GRADIANTBLUE, GRADIENTYELLOW, COLORS } from '../../constants/colors';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { fiscalIdentity, voucherType } = this.props;
    fcIndentification = fiscalIdentity.name === 'fc' ? '' : fiscalIdentity.cuit;
    this.state = {
      voucherType,
      cf: true,
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      bool:false,
      invoiceDate: new Date(),
      modalVisible: false,
      fcIndentification,
      loading: false
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
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }  
  };

  setModalVisible = visible => this.setState({modalVisible: visible});
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  setFcIndentification = value => this.setState({ fcIndentification: value });
  setLoading = (bool) => this.setState({ loading: bool });
  changeTypeCustomer = () => this.setState({cf:true});
  navigateClient = () => this.props.navigation.navigate('ListCustomer');
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
    const {
      updateInvoice,
      createInvoice,
      invoiceId,
    } = this.props;
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
    const { fcIndentification } = this.state;
    const {
      fiscalIdentity,
      addFiscalIdentityToInvoice,
    } = this.props;
    this.setLoading(true);
    addFiscalIdentityToInvoice('fc', fcIndentification, fiscalIdentity.id)
      .then(() => {
        this.setLoading(false);
        this.setState({cf: false});
        this.setFcIndentification(''); //Para que al cargar otro cf el botton aparezca desabilitado.
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
        finalConsumer={this.state.cf}
        setFinalConsumer={this.setFcIndentification}
        addFinalConsumer={this.addFinalConsumer}
        loading={this.state.loading}
        identity={this.state.fcIndentification}
        fiscalIdentity={this.props.fiscalIdentity}
      />
    );
  }

  render() {
    const iconAddCustomer = <Icon name="adduser" size={17} color={COLORS.blueMedium} />
    return(
      
      <LinearGradient 
        colors={GRADIANTBLUE}
        style={{flex:1}}  
        start={{x: 0, y: 1}} 
        end={{x: 1, y: 0.9}}
      >

      <View style={style.container}>
        
        <View style={style.containerBody}>

        <View style={style.inLineSpaceBetween}>
          <View style={style.boxVoucher}>
            <Text style={[style.textRegular12White, {paddingBottom: 5}]}>
              Tipo de Comprobante
            </Text>
            <TouchableOpacity
              onPress={() => {this.setModalVisible(true)}}
              style={style.buttonVoucher}
            >
              <Text style={style.textRegular16BlueCenter}>
                {this.presentVoucherType()}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.boxDate}>
            <Text style={[style.textRegular12White, {paddingBottom: 5}]}>
              Fecha de Emisión
            </Text>
            <TouchableOpacity onPress={this.showDateTimePicker} style={style.buttonDate}>
              <Text style={style.textRegular16BlueCenter}>
                {presentInvoiceDate(this.state.invoiceDate)}
              </Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              date={this.state.invoiceDate}
            />
          </View>
        </View>
        
        <View style={style.containerReceptor}>
        <Text style={[style.textRegular12White, {paddingBottom: 5}]}>
          Datos del Receptor
        </Text>
        <View style={[style.containerCustomers,style.inColumnSpaceBetween]}>
          <View style={style.inLineSpaceBetween}>
            <View style={style.textConsumerFinal}>
              <Text style={style.textRegular14Blue}> Consumidor Final</Text>
            </View>
            <Button
              title='Otro Cliente'
              testID='addCustomer'
              icon={iconAddCustomer}
              onPress={ this.navigateClient }
              buttonStyle={style.buttonAddCustomer}
              titleStyle={style.textRegular12Blue}
            />

            {/*<Button
              title='X'
              testID='cancel'
              onPress={() => this.setState({cf: false})}
              buttonStyle={style.buttonCancel}
              titleStyle={style.textRegular12Blue}
              disabled={!this.state.cf}
              disabledStyle={style.buttonCanceldisabled}
              disabledTitleStyle={style.textButtonCanceldisabled}
              TouchableComponent={TouchableWithoutFeedback}
            />*/}

          </View>
            { this.renderCustomer() }
          {/*<View style={style.lineBlue}></View>*/}

        </View>
        </View>
        <TouchableOpacity
          onPress={ this.navigateAddItems }
          style={{alignItems:'center'}}
          testID='addItems'
          disabled={ !validateData(this.props.fiscalIdentity.name, this.props.items.length) }
          disabledStyle={ style.buttonContinueDisabled }
          disabledTitleStyle = { style.textSemiBold14White }
        >
          <LinearGradient 
            colors={GRADIENTYELLOW}
            style={style.gradientAddItems}  
            start={{x: 0, y: 1}} 
            end={{x: 1, y: 0.9}}
          >
            <Text style={style.textRegular14WhiteBold}>
              <Icon name="plus" size={15} color="white" />  Agregar Items
            </Text>     
          </LinearGradient>
        </TouchableOpacity>

        { this.renderViewItemsAdd() }

      </View>

      <View style={style.containerFooter}>
          <TouchableOpacity
            onPress={ this.navigateToBewInvoice }
            style={{alignItems:'center'}}
            testID='continue'
            disabled={ !validateData(this.props.fiscalIdentity.name, this.props.items.length) }
            disabledStyle={ style.buttonContinueDisabled }
            disabledTitleStyle = { style.textSemiBold14White }
          >
            <LinearGradient 
              colors={GRADIENTYELLOW}
              style={style.gradientContinue}  
              start={{x: 0, y: 1}} 
              end={{x: 1, y: 0.9}}
            >
              <Text style={style.textRegular14WhiteBold}>
                Continuar
              </Text>     
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={style.modalVoucher}>
            <View style={style.boxModal}>
              <View style={style.headerModal}>
                <Text style={style.textRegular16WhiteCenter}>Tipo de Comprobante</Text>
              </View>
              <View style={style.boxVoucherType}>
                {VOUCHER_TYPES.map((voucherType, index) => (
                <View key={index}>
                  <TouchableOpacity
                    style={[style.borderVoucher,style.marginVertical8]}
                    onPress={() => this.selectionVoucher(voucherType)}
                  >
                    <Text style={style.textRegular16Blue}>
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