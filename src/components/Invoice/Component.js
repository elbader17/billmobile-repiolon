import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert} from 'react-native';
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
      cf: false,
      isDateTimePickerVisible: false,
      isDateTimeVisible:false,
      bool:false,
      date: new Date().getDate()+'/'+ new Date().getMonth()+'/'+ new Date().getFullYear(),
      modalVisible: false,
      voucher: voucher[0],
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

  selectionVoucher = (date) => {
    this.setModalVisible(!this.state.modalVisible);
    this.setState({voucher: date})
  }

  changeTypeCustomer = () => {
    this.setState({cf:true})
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
            <Text style={style.textRegular14GrayDark}>
              {this.props.identitiFiscal.name}
            </Text>    
          </View>
        </ScrollView>
      );
    }else {
      return (
        <View style={style.containerFinalConsumer}>
          <View style={[style.inLineSpaceBetween, {alignItems: 'center'}]}>
            <TextInput 
              placeholder="DNI"
              onChangeText={this.setDni}
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

  render() {
    const buttonCfEnable = style.buttonCfEnable;
    const buttonCfDisable = style.buttonCfDisable;
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={style.inLineSpaceBetween}>
          <View style={style.boxVoucher}>
            <TouchableOpacity
              onPress={() => {this.setModalVisible(true)}}
              style={style.buttonVoucher}
            >
              <Text style={style.textRegular16WhiteCenter}>
                {this.state.voucher.label}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.boxDate}>
            <TouchableOpacity onPress={this.showDateTimePicker} style={style.buttonDate}>
              <Text style={style.textRegular16WhiteCenter}>
                {this.state.date}
              </Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
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
              title='R. INSCRIPTO'
              onPress={() => this.setState({cf: false})}
              buttonStyle={style.buttonRI}
              titleStyle={style.textRegular11Gray}
              disabled={!this.state.cf}
              disabledStyle={style.buttonRIdisabled}
              disabledTitleStyle={style.textButtonRIdisabled}
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
          onPress={ this.xxx }
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
                {voucher.map((i) => (
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
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(Invoice);
