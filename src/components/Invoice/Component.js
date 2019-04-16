import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import style from './style';
import { VOUCHER_TYPES } from '../../constants/invoice';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { fiscalIdentity } = this.props;
    fcIndentification = fiscalIdentity.name === 'fc' ? fiscalIdentity.cuit : ''
    this.state = {
      voucherType: VOUCHER_TYPES.find((v) => v.value===this.props.voucherType),
      selectedIndex: 0,
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      bool:false,
      invoiceDate: this.props.invoiceDate,
      modalVisible: false,
      fcIndentification,
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

  selectCustomerType = () => {
    
  }

  presentInvoiceDate = () => {
    const d = this.state.invoiceDate;
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  navigateClient = () => {
    this.props.navigation.navigate('NewInvoiceCustomer');
  }

  addItems = () => {
    this.props.navigation.navigate('InvoiceItemList');
  }

  newInvoice = () => {
    const { fiscalIdentity } = this.props.fiscalIdentity;
    const { items} = this.props.items;
    //createInvoice()
    this.props.navigation.navigate('InvoiceSummary');
  }

  addFinalConsumer = () => {
    const { fcIndentification } = this.state;
    console.log('fcIndentification; ', fcIndentification);
    const {
      fiscalIdentity,
      addFiscalIdentityToInvoice,
    } = this.props;
    addFiscalIdentityToInvoice('fc', fcIndentification, fiscalIdentity.id);
  }

  setFcIndentification = (value) => {
    this.setState({ fcIndentification: value });
  }

  selectionVoucher = (date) => {
    this.setModalVisible(!this.state.modalVisible);
    this.setState({voucherType: date})
  }

  changeTypeCustomer = () => {
    this.setState({cf:true})
  }

  selectCustomer() {
    this.setState({selectCustomer:!this.state.selectCustomer})
  }

  renderViewItemsAdd = () => {
    if (this.props.items.length != 0) {
      return (
        <View style={[style.containerItemsInvoice,style.inColumnSpaceBetween]}>
          <View style={style.boxItemsInvoice}> 
          <ScrollView>
            <View style={style.listItems}>
              {this.props.items.map((i) => (
              <View>
                <View style={[style.lineGrayLight, style.marginVertical5]}></View>
                <View style={style.inLineSpaceBetween}>
                  <View style={style.boxItems1}>
                    <Text style={style.textRegular16GrayDark}>
                      {i.name}
                    </Text>
                  </View>
                  <View style={[style.inLineSpaceBetween,style.boxItems2]}>
                    <Button
                      title='X1'
                      buttonStyle={style.buttonCantProduct}
                      titleStyle={ style.textRegular12RedkBold }
                    />
                    <Button
                      icon={
                        <Icon
                          name="md-trash"
                          size={23}
                          color="#EE6123"
                        />
                      }
                      buttonStyle={style.buttonDelete}
                    />
                  </View>
                  <View style={style.boxItems3}>
                    <Text style={style.textRegular16GrayDark}>
                      ${i.price}
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
                <Text style={style.textRegular16GrayDarkBold}>$0</Text>
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
              onChangeText={this.setFcIndentification}
              style={[style.textRegular18GrayDark,style.inputDNICustomer]}
            />
            <Button
              icon={
                <Icon
                name="md-checkmark"
                size={25}
                color="#EE6123"
                />
              }
              onPress={ this.createCustomer }
              buttonStyle={ style.buttonCheck }
            />            
          </View>
        </View>
      );
    }
  }

  renderListCustomers = () => {
    //PREGUNTAR A NICO
    //Alert.alert('fasas'+this.props.identitiFiscal.name)
    if (this.props.fiscalIdentity.name!='') {
      return(
        <View style={style.inLineSpaceBetween}>
        <Text style={style.textRegular14GrayDark}>
          {this.props.fiscalIdentity.name}
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
          buttonStyle={ this.state.selectCustomer ? style.buttonCheckCustomerEnabled : style.buttonCheckCustomerDisabled }
        />  
        </View> 
      );
    } else {
        return(
          <Text style={style.textRegular14Gray}>
            No hay Clientes Cargados
          </Text>
       );
      }
  }

  render() {
    const buttonCfEnable = style.buttonCfEnable;
    const buttonCfDisable = style.buttonCfDisable;
    return(
      <ScrollView>
      <View style={style.container}>
        <View style={style.inLineSpaceBetween}>
          <View style={style.boxVoucher}>
            <TouchableOpacity
              onPress={() => {this.setModalVisible(true)}}
              style={style.buttonVoucher}
            >
              <Text style={style.textRegular16WhiteCenter}>
                {this.state.voucherType.label}
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
              title='CANCELAR'
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
            onPress={ this.newInvoice }
            buttonStyle={ style.buttonContinue }
            titleStyle={ style.textSemiBold14White }
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
                {VOUCHER_TYPES.map((i) => (
                <View>
                  <TouchableOpacity 
                    style={[style.borderVoucher,style.marginVertical8]}
                    onPress={() => this.selectionVoucher(i)}
                  >
                    <Text style={style.textRegular16Blue}>
                      {i.label}
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
    )
  }
}

export default withNavigation(Invoice);
