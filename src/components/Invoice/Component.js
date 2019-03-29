import React from 'react';
import { View, Text, Picker, TextInput, ImageBackground} from 'react-native';
import { Button, ButtonGroup } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
    }
  }

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
    this.props.navigation.navigate('Client');
  }

  renderCustomer = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View>
          <Text>Listado de Clientes</Text>
          <Button
            title='AGREGAR CLIENTE'
            onPress={ this.navigateClient }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />     
        </View>
      );
    }else {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput 
              placeholder="DNI"
              style={ style.textBox }
            />
            <Button
              title='CONFIRMAR'
              buttonStyle={ style.submit }
              titleStyle={ style.submitText }
            />            
          </View> 
        </View>
      );
    }
  }

  xxx = () => {
    this.props.navigation.navigate('Items');
  }

  render() {
    const a = style.buttonOn
    const b = style.buttonOff
    const component1 = () => <Text style={this.state.selectedIndex === 0 ? a : b}></Text>
    const component2 = () => <Text style={this.state.selectedIndex === 1 ? a : b}>Consumidor Final</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={style.container2}>
        <View style={ style.textBoxBtnHolder }>
          <Picker
            selectedValue={this.state.typeVoucher}
            onValueChange={itemValue => this.setState({ typeVoucher: itemValue })}>
            {voucher.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>
          </View>
          <Text style={ style.textRegister }> FECHA DE FACTURACIÓN </Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="dd/mm/aaaa"
              style={ style.textBox }
            />
          </View>
          <ButtonGroup
            onPress={ this.updateIndex }
            selectedIndex={ this.state.selectedIndex }
            buttons={ buttons }
            containerStyle={ style.buttons }
            textStyle={ style.text }
            selectedButtonStyle={ style.buttonSelected }
          />
          { this.renderCustomer() }
          
          <Button
            title='AGREGAR ITEMS'
            onPress={ this.xxx }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
          <Button
            title='CONTUNUAR'
            onPress={ this.xxx }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
            disabled
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(Invoice);
