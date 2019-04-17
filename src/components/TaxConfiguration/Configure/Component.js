import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';


const PASSWORD_REGEXP = new RegExp("(^([20]|[23]|[24]|[27]|[30]|[23]|[34]){1})(.[0-9]{6,8})(.[0-9]{1})");

class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: "",//this.props.name,
      cuit: "",//this.props.cuit"",
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
    const isValidCuit = PASSWORD_REGEXP.test(this.state.cuit);
    
    return ( isValidCuit  );
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
