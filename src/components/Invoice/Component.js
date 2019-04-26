import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert, ImageBackground} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { VOUCHER_TYPES } from '../../constants/invoice';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { fiscalIdentity, voucherType } = this.props;
    fcIndentification = fiscalIdentity.name === 'fc' ? fiscalIdentity.cuit : ''
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

  static navigationOptions = {
    title: 'GENERACIÓN DE COMPROBANTE',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

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
      })
  }

  updateInvoiceItemQuantity = (invoiceItemId, quantity) => {
    const { updateInvoiceItemQuantity } = this.props;
    updateInvoiceItemQuantity(invoiceItemId, quantity);
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

  selectCustomer() {
    this.setState({selectCustomer:!this.state.selectCustomer})
  }

  validateData = () => {
    return ((this.props.fiscalIdentity.name!="") && (this.props.items.length!= 0));
  }

  setLoading = (bool) => this.setState({ loading: bool })

  renderViewItemsAdd = () => {
    if (this.props.items.length != 0) {
      return (
        <View style={[style.containerItemsInvoice,style.inColumnSpaceBetween]}>
          <View style={style.boxItemsInvoice}>
          <ScrollView>
            <View style={style.listItems}>
              {this.props.items.map((item, index) => (
              <View key={index}>
                <View style={[style.lineGrayLight, style.marginVertical5]}></View>
                <View style={style.inLineSpaceBetween}>
                  <View style={style.boxItems1}>
                    <Text style={style.textRegular16GrayDark}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={[style.inLineSpaceBetween,style.boxItems2]}>
                    <TouchableOpacity
                      onPress={() => this.updateInvoiceItemQuantity(item.id, item.quantity + 1)}
                      style={style.buttonCantProduct}
                    >
                      <Text style={style.textRegular12RedkBold}>
                        {`X${item.quantity}`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={style.boxItems3}>
                    <Text style={style.textRegular16GrayDark}>
                      ${item.price}
                    </Text>
                  </View>
                </View>
              </View>
              ))}
            </View>
          </ScrollView>
          </View>

          <View style={style.boxItemsInvoiceTotal}>
            <View style={style.center}>
              <View style={[style.lineGray, {bottom: 6}]}></View>
              <View style={style.inLineSpaceBetween}>
                <Text style={style.textRegular16GrayDarkBold}>TOTAL</Text>
                <Text style={style.textRegular16GrayDarkBold}>${this.props.invoiceTotal}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }

  renderCustomer = () => {
    if (!this.state.cf) {
      return (
        <ScrollView>
          <View style={style.listCustomer}>
            {this.renderListCustomers()}
          </View>
        </ScrollView>
      );
    }else {
      return (
        <View style={style.containerFinalConsumer}>
          <View style={[style.inLineSpaceBetween, {alignItems: 'center'}]}>
            <TextInput
              placeholder="DNI"
              placeholderTextColor={'#cecece'}
              onChangeText={this.setFcIndentification}
              style={[style.textRegular18GrayDark,style.inputDNICustomer]}
              keyboardType='numeric'
            />
            <Button
              icon={
                <Icon
                name="md-return-right"
                size={18}
                color="#EE6123"
                />
              }
              onPress={ this.addFinalConsumer }
              buttonStyle={ style.buttonCheck }
              disabledStyle= { style.buttonCheckDisabled }
              loading = {this.state.loading}
              disabled = { this.state.loading }
            />
          </View>
        </View>
      );
    }
  }

  renderListCustomers = () => {
    if (this.props.fiscalIdentity.name!='') {
      return(
        <View style={style.inLineSpaceBetween}>
        <Text style={style.textRegular14GrayDark}>
          {this.props.fiscalIdentity.name === 'fc' ? this.props.fiscalIdentity.identification : this.props.fiscalIdentity.name}
        </Text>
        <Button
          icon={
            <Icon
              name="md-checkmark"
              size={20}
              color="#EE6123"
            />
          }
          onPress={() => {this.selectCustomer()} }
          buttonStyle={style.buttonCheek}
          //buttonStyle={ this.state.selectCustomer ? style.buttonCheckCustomerEnabled : style.buttonCheckCustomerDisabled }
        />
        </View>
      );
    } else {
        return(
          <Text style={[style.textRegular14Gray,{padding: 5}]}>
            No hay Clientes Cargados
          </Text>
       );
      }
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
              title='VOLVER'
              onPress={() => this.setState({cf: false})}
              buttonStyle={style.buttonCancel}
              titleStyle={style.textRegular11Gray}
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
