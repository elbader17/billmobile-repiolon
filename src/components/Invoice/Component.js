import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Alert} from 'react-native';
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

const estilo = style.buttonModalSelected;

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      typeVoucher: '',
      selectedIndex: 0,
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      bool:false,
      date: new Date().getDate()+'/'+ new Date().getMonth()+'/'+ new Date().getFullYear(),
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});
 
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    this.setState({ date: date.getDate()+'/'+ date.getMonth()+'/'+date.getFullYear() })
    this.hideDateTimePicker();
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
    //createInvoice()

    this.props.navigation.navigate('InvoiceSummary');

  }
  createCustomer = () => {
    
  }

  renderCustomer = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View style={style.listCustomer}>
          <Text>Listado de Clientes</Text>
          <Text>{ this.props.identitiFiscal.name }</Text>
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
          <Text>Listado de Clientes</Text>
          <Text>{ this.props.identitiFiscal.name }</Text>
            <TextInput 
              placeholder="DNI"
              onChangeText={this.setDni}
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
            onPress={ this.createCustomer }
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
        <View style={style.inLineSpaceBetween}>
          <View style={style.boxVoucher}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={style.buttonVoucher}
            >
              <Text style={style.textRegular16WhiteCenter}>FACTURA-C</Text>
            </TouchableOpacity>
          </View>
          <View style={style.boxDate}>
            <TouchableOpacity onPress={this.showDateTimePicker} style={style.buttonDate}>
              <Text style={style.textRegular16WhiteCenter}>{ this.state.date }</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
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
                <Text style={style.textRegular16WhiteCenter}>TIPO DE COMPROBANTE</Text>
              </View>
              <View style={style.boxVoucherType}>
                <TouchableOpacity 
                  style={[style.borderVoucher,style.marginVertical8]}
                >
                <Text style={style.textRegular18Blue}>
                  FACTURA-C
                </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[style.borderVoucher,style.marginVertical8]}
                >
                <Text style={style.textRegular18Blue}>
                  RECIBO-C
                </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[style.borderVoucher,style.marginVertical8]}
                >
                  <Text style={style.textRegular18Blue}>
                    NOTA DE CRÉDITO-C
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[style.borderVoucher,style.marginVertical8]}
                > 
                  <Text style={style.textRegular18Blue}>
                    NOTA DE DÉBITO-C
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View> 
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> 
                
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(Invoice);
