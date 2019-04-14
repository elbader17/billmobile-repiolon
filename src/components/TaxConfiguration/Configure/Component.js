import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cuit: '',
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
      console.log('neh');
      Alert.alert("Pops Data: asdasd "+name+" "+cuit);
      this.props.navigation.push('HomeScreen');
    })
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
          />
          <Text style={ style.textRegular18GrayDark }>
            INGRESA TU CUIT
          </Text>
          <TextInput style={ style.textRegular14DarkGray }
            onChangeText={this.setCuit}
            style={ style.textBox }
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
        />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(TaxConfiguration);
