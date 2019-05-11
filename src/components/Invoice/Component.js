import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert, ImageBackground} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import InvoiceItems from './InvoiceItems';
import InvoiceCustomer from './InvoiceCustomer';
import style from './style';
import { VOUCHER_TYPES } from '../../constants/invoice';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { fiscalIdentity, voucherType } = this.props;
    fcIndentification = fiscalIdentity.name === 'fc' ? '' : fiscalIdentity.cuit;
    this.state = {
      voucherType,
      cf: false,
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      bool:false,
      invoiceDate: this.props.invoiceDate,
      modalVisible: false,
      fcIndentification,
      loading: false
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

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

  presentInvoiceDate = () => {
    const d = this.state.invoiceDate;
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  presentVoucherType = () => {
    const { voucherType } = this.state;
    return VOUCHER_TYPES.find((v) => v.value === voucherType).label;
  }

  navigateClient = () => {
    this.props.navigation.navigate('NewInvoiceCustomer');
  }

  addItems = () => {
    this.props.navigation.navigate('NewInvoiceItem');
  }

  navigateToBewInvoice = () => {
    this.props.navigation.navigate('InvoiceSummary');
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

  setFcIndentification = (value) => {
    this.setState({ fcIndentification: value });
  }

  selectionVoucher = (voucherType) => {
    this.setModalVisible(!this.state.modalVisible);
    this.setState({voucherType: voucherType.value });
  }

  changeTypeCustomer = () => {
    this.setState({cf:true})
  }

  validateData = () => {
    return ((this.props.fiscalIdentity.name!="") && (this.props.items.length!= 0));
  }

  setLoading = (bool) => this.setState({ loading: bool })

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
    const buttonCfEnable = style.buttonCfEnable;
    const buttonCfDisable = style.buttonCfDisable;
    return(
      <ImageBackground source={require('../../images/gradiant.png')} style={{width: '100%', height: '100%'}}>
      <ScrollView>
      <View style={style.container}>
        <View style={style.inLineSpaceBetween}>
          <View style={style.boxVoucher}>
            <TouchableOpacity
              onPress={() => {this.setModalVisible(true)}}
              style={style.buttonVoucher}
            >
              <Text style={style.textRegular16WhiteCenter}>
                {this.presentVoucherType()}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.boxDate}>
            <TouchableOpacity onPress={this.showDateTimePicker} style={style.buttonDate}>
              <Text style={style.textRegular16WhiteCenter}>
                {this.presentInvoiceDate()}
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

        <View style={[style.containerCustomers,style.inColumnSpaceBetween]}>
          <View style={[style.inLineSpaceBetween,style.margin7]}>
            <Button
              title='CONSUMIDOR FINAL'
              onPress={this.changeTypeCustomer}
              buttonStyle = {this.state.cf ? buttonCfEnable : buttonCfDisable}
              titleStyle={style.textRegular11GrayDark}
            />
            <Button
              title='Cancelar'
              onPress={() => this.setState({cf: false})}
              buttonStyle={style.buttonCancel}
              titleStyle={style.textRegular12Gray}
              disabled={!this.state.cf}
              disabledStyle={style.buttonCanceldisabled}
              disabledTitleStyle={style.textButtonCanceldisabled}
              TouchableComponent={TouchableWithoutFeedback}
            />
            <Button
              icon={
                <Icon
                  name="md-person-add"
                  size={20}
                  color="#EE6123"
                />
              }
              onPress={ this.navigateClient }
              buttonStyle={style.buttonAddCustomer}

            />
          </View>
          <View style={[style.lineGray, style.marginHorizontal5]}></View>
          { this.renderCustomer() }
          <View style={style.containerButtonShowAll}>
            <View style={[style.lineGray, style.marginHorizontal5]}></View>
            <Button
              title='VER TODOS'
              buttonStyle = {style.buttonShowAll}
              titleStyle={style.textRegular12Red}
            />
          </View>
        </View>

        <Button
          title={
            <Text>
              <Text style={style.textRegular14GrayDark}>AGREGAR </Text>
              <Text style={style.textRegular14GrayDarkBold}>ITEMS</Text>
            </Text>}
          icon={
            <View style={style.positionIconAdd}>
            <Icon
              name="md-add"
              size={30}
              color="#EE6123"
            />
            </View>
          }
          iconRight
          onPress={ this.addItems }
          buttonStyle={ style.buttonAddItems }
          titleStyle={ style.textRegular14GrayDark }
        />

        { this.renderViewItemsAdd() }

        <View style={style.positionFinalButton}>
          <Button
            title='CONTINUAR'
            onPress={ this.navigateToBewInvoice }
            buttonStyle={ style.buttonContinue }
            titleStyle={ style.textSemiBold14White }
            disabled={ !this.validateData() }
            disabledStyle={ style.buttonContinueDisabled }
            disabledTitleStyle = { style.textSemiBold14White }
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
      </ScrollView>
      </ImageBackground>
    )
  }
}

export default withNavigation(Invoice);
