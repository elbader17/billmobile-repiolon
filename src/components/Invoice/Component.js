import React from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity} from 'react-native';
import { Button, ButtonGroup } from "react-native-elements";
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
      voucherType: this.props.voucherType,
      selectedIndex: 0,
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      bool:false,
      invoiceDate: this.props.invoiceDate,
      fcIndentification,
    }
  }

  static navigationOptions = {
    title: 'GENERACIÓN DE COMPROBANTE',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

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
    const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
    this.setState({ selectedIndex: newIndex });
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

  renderCustomer = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View style={style.listCustomer}>
          <Text>{ this.props.fiscalIdentity.name }</Text>
          <Button
            title=' AGREGAR CLIENTE'
            icon={
              <Icon
                name="md-person-add"
                size={20}
                color="#EE6123"
              />
            }
            onPress={ this.navigateClient }
            buttonStyle={ style.addCustomer }
            titleStyle={ style.submitTextCustomer }
          />

        </View>
      );
    }else {
      return (
        <View style={style.inLineSpace}>
          <View style={style.textBoxBtnHolder}>
          <Text>{ this.props.fiscalIdentity.name }</Text>
            <TextInput
              placeholder="DNI"
              onChangeText={this.setFcIndentification}
              value={this.state.fcIndentification}
              style={ style.textInputDNI }
            />
          </View>
          <Button
            icon={
              <Icon
                name="md-checkmark"
                size={25}
                color="#EE6123"
              />
            }
            onPress={ this.addFinalConsumer }
            buttonStyle={ style.buttonConfirm }
          />
        </View>
      );
    }
  }

  renderVoucherTypes = () => {
    return VOUCHER_TYPES.map((voucherType, index) => (
      <Picker.Item key={index} label={voucherType.label} value={voucherType.value} />
    ))
  }

  render() {
    const component1 = () => <Text style={ style.buttonOn }>Consumidor Final</Text>
    const component2 = () => <Text>Cliente</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={style.containerDateInvoice}>
        <View style={ style.textBoxBtnHolderAux }>
          <Picker
            selectedValue={this.state.voucherType}
            style={{color: 'white'}}
            onValueChange={itemValue => this.setState({ voucherType: itemValue })}
          >
            {this.renderVoucherTypes()}
          </Picker>
        </View>
        <View >
          <TouchableOpacity onPress={this.showDateTimePicker} style={style.styleDate}>
            <Text style={style.textRegular14White}>{ this.presentInvoiceDate() }</Text>
          </TouchableOpacity>
          <DateTimePicker
            date={this.state.invoiceDate}
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>
      </View>
        <View style={style.containerCustomers}>
          <View style={style.inLine}>
            <ButtonGroup
              onPress={ this.selectCustomerType }
              selectedIndex={ this.state.selectedIndex }
              buttons={ buttons }
              containerStyle={ style.buttons }
              buttonStyle = {style.borderButton}
              innerBorderStyle={{color: 'white'}}
              selectedButtonStyle={style.backgroundColorButton}
            />
          </View>
          <View style={[style.lineGray, {marginHorizontal: 3}]}></View>
          { this.renderCustomer() }
        </View>
        <View style={style.containerCustomers}>
        { this.props.items.map((i) => (
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <View>
                  <Text>{i.name}</Text>
                </View>
                <View>
                  <Text>${i.price}</Text>
                </View>
              </View>
            ))
          }
          </View>
        <Button
          title=' AGEGAR ITEMS'
          icon={
            <Icon
              name="md-add"
              size={20}
              color="#EE6123"
            />
          }
          onPress={ this.addItems }
          buttonStyle={ style.addItems }
          titleStyle={ style.submitTextItems }
        />
        <View>
          <Button
            title='CONTINUAR'
            onPress={ this.newInvoice }
            buttonStyle={ style.buttonContinue }
            titleStyle={ style.textRegular14White }
            disabledTitleStyle={ style.textRegular14White}
            disabledStyle={ style.submitDisabled }
                      />
        </View>
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(Invoice);
