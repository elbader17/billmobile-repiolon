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

  handleConfigFiscal = () => {
   
   Alert.alert("Towken: "+this.props.jwtToken);
   const { name, cuit } = this.state;
   const { registerUserService } = this.props;
   registerUserService(name, cuit, this.props.jwtToken)
    .then((data) => {
      Alert.alert("Pops Data: "+this.props.name+" "+this.props.cuit);
      this.props.navigation.navigate('HomeScreen');
    })
  }

  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })

    
  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <View style={ style.textBoxBtnHolder }>
            <Text style={ style.textRegister }>
              NOMBRE 
            </Text>
            <TextInput style={ style.textRegister }
              onChangeText={this.setName}
              style={ style.textBox }
            />
            <Text style={ style.textRegister }>
              INGRESA TU CUIT
            </Text>
            <TextInput style={ style.textRegister }
              onChangeText={this.setCuit}
              style={ style.textBox }
            />
<<<<<<< HEAD:src/components/TaxConfiguration/component.js
=======
            <Text style={ style.textRegister }>
              POR AHORA SIN CLAVE FISCAL
            </Text>
>>>>>>> fab5f7d90c66e843a792c0669e8c11c2c0ca5cbf:src/components/TaxConfiguration/Component.js
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