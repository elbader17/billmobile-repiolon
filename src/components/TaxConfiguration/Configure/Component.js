import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
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
   //Alert.alert("Towken: "+this.props.jwtToken);
   //const { name, cuit } = this.state;
   //const { registerUserService } = this.props;
   //registerUserService(name, cuit, this.props.jwtToken)
   // .then((data) => {
      //Alert.alert("Pops Data: "+this.props.name+" "+this.props.cuit);
      this.props.navigation.push('HomeScreen');
    //})
  }

  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })

    
  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <View style={ style.textBoxBtnHolder }>
            <Text style={ style.text }>
              NOMBRE DE LA EMPRESA
            </Text>
            <TextInput style={ style.textRegister }
              onChangeText={this.setName}
              style={ style.textBox }
            />
            <Text style={ style.text }>
              INGRESA TU CUIT
            </Text>
            <TextInput style={ style.textRegister }
              onChangeText={this.setCuit}
              style={ style.textBox }
            />
            <Button
              title="LISTO"
              onPress={ this.handleConfigFiscal }
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

export default withNavigation(TaxConfiguration);