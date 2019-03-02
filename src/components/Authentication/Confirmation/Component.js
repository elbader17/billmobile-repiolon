import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import style from './style';

class Confirmation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmPassword: '',
    };
  }

  handleConfirmationCode = () => {
    const { confirmationEmail, confirmationCode } = this.state;
    const { confirmCode } = this.props;
    confirmCode(confirmationEmail,confirmationCode,{})
  }

  setConfirmPassword = (value) => this.setState({ confirmPassword: value })

  render() {
    return(
      <View state={ style.container }>
        <View style={ style.container2 }>       
          <Text style={ style.text }>
            Verificar Cuenta
          </Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Email"
              onChangeText={ (value) => this.setState({ confirmationEmail: value }) }
              placeholder="Tu email"
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Codigo de confirmación"
              onChangeText={ (value) => this.setState({ confirmationCode: value }) }
              placeholder="Codigo de Confirmación"
              style={ style.textBox }
            />
          </View>
          <Button
            title='VERIFICAR'
            testID={'submitConfirmation'}
            onPress={ this.handleConfirmationCode }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
        </View>
      </View>
    )
  }
}

export default Confirmation;