import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button } from "react-native-elements";
import style from './style';
import { async } from 'rxjs/internal/scheduler/async';

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
            <Button
              title="LISTO"
              onPress={ this.handleConfigFiscal }
              buttonStyle={ style.handleConfigFiscal }
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