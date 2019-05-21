import React from 'react';
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import { CODE_CONFIRM } from '../../../constants/regular_expressions'
import { COLORS } from '../../../constants/colors';
import style from './style';

class Confirmation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmationEmail: this.props.navigation.getParam('email', 'e-mail'),
      confirmationCode: '',
      loading: false
    };
  }

  handleConfirmationCode = () => {
    const { confirmationEmail, confirmationCode } = this.state;
    const { confirmCode } = this.props;
    this.setLoading(true);
    confirmCode(confirmationEmail,confirmationCode,{})
    .then((data) => {
      this.props.navigation.navigate('Authentication', { index: true });
    })
    .catch((err) => {
      this.props.navigation.navigate('ConfirmationCodeRegister');
      this.setLoading(false);
    });
  }

  validateData = () => { return CODE_CONFIRM.test(this.state.confirmationCode) }
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{flex: 1}}
      >
        <View style={ style.container }>
          <ScrollView> 
            <Text style={[style.textRegular14WhiteBold,{textAlign: 'center'}]}>
              VERIFICACIÓN DE CUENTA
            </Text>
            <View style={style.lineWhite}></View>
            <Text style={[style.textRegular14White,{textAlign: 'center'}]}>
              Se envió el Código de Confirmación a su email.
            </Text>
            <View style={style.lineWhite}></View>
            <Text style={style.textRegular16White}>
              Tu Email
            </Text>
            <TextInput
              label="Email"
              value= { this.state.confirmationEmail }
              onChangeText={ (value) => this.setState({ confirmationEmail: value }) }
              placeholder="Email"
              placeholderTextColor={COLORS.gray}
              style={ style.textBox }
              disabled={ true }
            />
            <Text style={style.textRegular16White}>
              Ingresá el Código de Confirmación
            </Text>
            <TextInput
              label="Codigo de confirmación"
              onChangeText={ (value) => this.setState({ confirmationCode: value }) }
              placeholder="Número de 6 dígitos"
              placeholderTextColor={COLORS.gray}
              style={ style.textBox }
              keyboardType='numeric'
            />
          </ScrollView>
        </View>
        <Button
          title='VERIFICAR CUENTA'
          testID={'submitConfirmation'}
          onPress={ this.handleConfirmationCode }
          buttonStyle={ style.buttonVerify }
          titleStyle={ style.textRegular14WhiteBold }
          disabledTitleStyle={ style.textRegular14WhiteBold}
          disabledStyle={ style.buttonVerifyDisabled }
          disabled={ !this.validateData() }
          loading = {this.state.loading}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withNavigation(Confirmation);
