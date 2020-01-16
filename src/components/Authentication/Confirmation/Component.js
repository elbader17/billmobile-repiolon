import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import { CODE_CONFIRM } from '../../../constants/regular_expressions'
import { messageConfirmAccount } from '../../../utils/messagesNotifications';
import style from '../style';

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
    confirmCode(confirmationEmail,confirmationCode)
      .then((data) => {
        if (data) {
          showMessage(messageConfirmAccount);
          this.props.navigation.navigate('Authentication');
        }
        else {
          this.setLoading(false);
          alert('Error: Datos incorrectos');
          this.props.navigation.navigate('ConfirmationCodeRegister');
        } 
      })
  }
  navigateAuth = () => this.props.navigation.navigate('Authentication');
  validateData = () => { return CODE_CONFIRM.test(this.state.confirmationCode) }
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <View style={ style.container }>
        <View style={style.containerBody}>
          
          <View style={style.containerHeader}>
            <Text style={style.textBold18BlueMedium}>
              Verificación de Cuenta
            </Text>
            <Text style={style.textRegular12GrayDark}>
              Se envió el Código de Confirmación a su email.
            </Text>
          </View>

          <View style={style.containerInputs}>
            <Text style={[style.textRegular14Gray, {textAlign: 'left'}]}>
              Email a Verificar
            </Text>
            <TextInput
              placeholder={'Email'} 
              value= { this.state.confirmationEmail }
              onChangeText={ (value) => this.setState({ confirmationEmail: value }) }
              style={style.inputVerify}
            />
            <Text style={[style.textRegular14Gray, {textAlign: 'left'}]}>
              Código de Verificación
            </Text>
            <TextInput
              placeholder={'Número de 6 Dígitos'} 
              keyboardType='numeric'
              onChangeText={ (value) => this.setState({ confirmationCode: value }) }
              style={style.inputVerify}
            />
    
            <Button
                title='Verificar Cuenta'
                TouchableComponent={TouchableOpacity}
                testID={'submitConfirmation'}
                onPress={ this.handleConfirmationCode }
                buttonStyle={[style.buttonSignTwo,{marginTop: 15}]}
                titleStyle={ style.textBold14White }
                disabled={ !this.validateData() }
                loading = {this.state.loading}
              /> 
            
            </View>
          </View>    
            <View style={[style.containerFooter,{alignItems: 'center'}]}>
              <Button
                title='Cancelar'
                TouchableComponent={TouchableOpacity}
                testID={'submitConfirmation'}
                onPress={ this.navigateAuth }
                buttonStyle={ style.buttonSignTwo }
                titleStyle={ style.textBold14White }
              />
            </View>

      </View>
    )
  }
}

export default withNavigation(Confirmation);
