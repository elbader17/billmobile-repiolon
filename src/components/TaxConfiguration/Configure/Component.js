import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import { ConsoleLogger } from '@aws-amplify/core';
import  { validateCuit } from '../../../utils/identity';

const CUIT_REGEXP =  /\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/g;


class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: "",//this.props.name,
      cuit: "",//this.props.cuit,
    };
  }

  static navigationOptions = {
    title: 'CONFIGURACIÓN DE CUIT',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  handleConfigFiscal = () => {
    const { name, cuit } = this.state;
    const { updateFiscalIdentity } = this.props;
    updateFiscalIdentity(name, cuit)
     .then((data) => {
      this.props.navigation.push('HomeScreen');
    })
  }

  validateData = () => {
    const isValidCuit = CUIT_REGEXP.test(this.state.cuit);
    const { cuit } = this.state;
    const bool = validateCuit(cuit);
    return bool;
  }

  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })


  render() {
    return(
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={ style.textBoxBtnHolder }>
          <Text style={ style.textRegular18GrayDark }>
            NOMBRE DE LA EMPRESA
          </Text>
          <TextInput style={ style.textRegular14DarkGray }
            onChangeText={this.setName}
            style={ style.textBox }
            value={this.state.name}
          />
          <Text style={ style.textRegular18GrayDark }>
            INGRESA TU CUIT
          </Text>
          <TextInput style={ style.textRegular14DarkGray }
            onChangeText={this.setCuit}
            style={ style.textBox }
            value={this.state.cuit}
          />
          <Text style={[style.textDescription, {paddingVertical: 15}] }>
            Con el CUIT podremos acceder a tu informacion y
            configurar la cuenta por ti.
          </Text>
        </View>
        <Button
          title="LISTO"
          onPress={ this.handleConfigFiscal }
          buttonStyle={ style.submitReady }
          titleStyle={ style.textRegular14White }
          disabledTitleStyle={ style.textRegular14White}
          disabledStyle={ style.submitDisabled }
          disabled={ !this.validateData() }
        />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(TaxConfiguration);
