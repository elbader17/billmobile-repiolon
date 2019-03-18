import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import style from './style';

class TaxConfiguration extends React.Component{
  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <View style={ style.textBoxBtnHolder }>
            <Text style={ style.textRegister }>
              NOMBRE DE LA EMPRESA
            </Text>
            <TextInput
              style={ style.textBox }
            />
            <Text style={ style.textRegister }>
              INGRESA TU CUIT
            </Text>
            <TextInput
              style={ style.textBox }
            />
            <Text style={ style.textRegister }>
              INGRESA TU CLAVE FISCAL
            </Text>
            <TextInput
              style={ style.textBox }
            />
            <Button
              title="LISTO"
              buttonStyle={ style.submit }
              titleStyle={ style.submitText }
              disabledTitleStyle={ style.submitText }
              disabledStyle={ style.submitDisabled }
            />
          </View>
        </View>
      </View>
    )
  }
}

export default TaxConfiguration;