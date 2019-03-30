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
   const { name, cuit } = this.state;
   const { updateFiscalIdentity } = this.props;
   updateFiscalIdentity(name, cuit, this.props.jwtToken)
    .then((data) => {
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
