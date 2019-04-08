import React from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity} from 'react-native';
import { Button, ButtonGroup } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';

const voucher = [
  {
    label: 'FACTURA-C',
    value: 'fc',
  },
  {
    label: 'RECIBO-C',
    value: 'rc',
  },
  {
    label: 'NOTA DE CRÉDITO-C',
    value: 'ncc',
  },
  {
    label: 'NOTA DE DÉBITO-C',
    value: 'ndc',
  },
];

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      typeVoucher: '',
      selectedIndex: 0,
      isDateTimePickerVisible: false,
      date: '',
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    alert(date.getDate()+'/'+ date.getMonth()+'/2019');
    this.setState({date: date})
    this._hideDateTimePicker();
  };

  static navigationOptions = {
    title: 'GENERACIÓN DE COMPROBANTE',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  updateIndex = () => {
    const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
    this.setState({ selectedIndex: newIndex });
  }

  navigateClient = () => {
    this.props.navigation.navigate('NewCustomer');
  }

  navigateClient = () => {
    this.props.navigation.navigate('NewCostumer');
  }

  xxx = () => {
    this.props.navigation.navigate('Items');
  }

  newInvoice = () => {
    const { identitiFiscal } = this.props.identitiFiscal;
    const { items} = this.props.items;
    createInvoice()
  }

  renderCustomer = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View style={style.listCustomer}>
          <Text>Listado de Clientes</Text>
          <Text>{ this.props.identitiFiscal.name }</Text>
          <Text>Listado de Productos</Text>
          <Text>{ this.props.items.map((i) => i.name+" price "+ i.price).join(', ') }</Text>
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
            <TextInput 
              placeholder="DNI"
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
            buttonStyle={ style.buttonConfirm }
          />            
        </View>
      );
    }
  }

  render() {
    const component1 = () => <Text style={ style.buttonOn }>Consumidor Final</Text>
    const component2 = () => <Text></Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={style.containerDateInvoice}>
        <View style={ style.textBoxBtnHolderAux }>
          <Picker
            selectedValue={this.state.typeVoucher}
            style={{color: 'white'}}
            onValueChange={itemValue => this.setState({ typeVoucher: itemValue })}>
            {voucher.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>
        </View>
        <View >
          <TouchableOpacity onPress={this._showDateTimePicker} style={style.styleDate}>
            <Text style={style.textRegular14White}>FECHA</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
        </View>
      </View>
        <View style={style.containerCustomers}>
          <View style={style.inLine}>
            <ButtonGroup
              onPress={ this.updateIndex }
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
        <Button
          title=' AGEGAR ITEMS'
          icon={
            <Icon
              name="md-add"
              size={20}
              color="#EE6123"
            />
          }
          onPress={ this.xxx }
          buttonStyle={ style.addItems }
          titleStyle={ style.submitTextItems }
        />
        <View>
          <Button
            title='CONTUNUAR'
            onPress={ this.newInvoice }
            buttonStyle={ style.buttonContinue }
            titleStyle={ style.textRegular14White }
            disabledTitleStyle={ style.textRegular14White}
            disabledStyle={ style.submitDisabled }
            disabled
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(Invoice);
