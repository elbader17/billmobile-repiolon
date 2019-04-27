import React from 'react';
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import { METRICS } from '../../../constants/metrics';

class Confirmation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      confirmPassword: '',
    };
  }

  handleConfirmationCode = () => {
    const { confirmationEmail, confirmationCode } = this.state;
    const { confirmCode } = this.props;
    confirmCode(confirmationEmail,confirmationCode,{});
  }

  setConfirmPassword = (value) => this.setState({ confirmPassword: value })

  render() {
    return(
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{flex: 1}}
      >
      <ScrollView>
        <View style={ style.container }>
            <Text style={[style.textRegular16WhiteBold,{textAlign: 'center', paddingVertical: 10}]}>
              VERIFICACIÓN DE CUENTA
            </Text>  
            <View style={style.lineWhite}></View>
            <Text style={[style.textRegular14WhiteBold,{textAlign: 'center'}]}>
              Se envió el Código de Confirmación a tu email.
            </Text>
            <View style={style.lineWhite}></View>
            <Text style={style.textRegular16White}>
              Ingresá tu email
            </Text>
            <TextInput
              label="Email"
              onChangeText={ (value) => this.setState({ confirmationEmail: value }) }
              placeholder="email"
               style={ style.textBox }
               disabled={ true }
            />
            <Text style={style.textRegular16White}>
              Ingresá el Código de Confirmación
            </Text>
            <TextInput
              label="Codigo de confirmación"
              onChangeText={ (value) => this.setState({ confirmationCode: value }) }
              placeholder="xxxxxx"
              style={ style.textBox }
              keyboardType='numeric'
            />
            
        </View>
      </ScrollView>
        <Button
          title='VERIFICAR CUENTA'
          testID={'submitConfirmation'}
          onPress={ this.handleConfirmationCode }
          buttonStyle={ style.buttonVerify }
          titleStyle={ style.textRegular14WhiteBold }
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withNavigation(Confirmation);
