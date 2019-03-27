import React from 'react';
import { View, Text, Alert, Picker, TextInput} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class Invoice extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'GENERACIÓN DE COMPROBANTE',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  xxx = () => {
    this.props.navigation.navigate('Client');
  }

  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <View style={ style.textBoxBtnHolder }>
            <Picker selectedValue = {null} onValueChange = {null}>
              <Picker.Item label = "FACTURA-C" value = "fc" />
              <Picker.Item label = "RECIBO-C" value = "rc" />
              <Picker.Item label = "NOTA DE CRÉDITO-C" value = "ncc" />
              <Picker.Item label = "NOTA DE DÉBITO-C" value = "ndc" />
            </Picker>
          </View>
          <Text style={ style.textRegister }> FECHA DE FACTURACIÓN </Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="dd/mm/aaaa"
              style={ style.textBox }
            />
          </View>
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
    )
  }
}

export default withNavigation(Invoice);
