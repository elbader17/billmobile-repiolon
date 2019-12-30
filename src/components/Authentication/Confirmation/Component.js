import React from 'react';
import { Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { showMessage } from "react-native-flash-message";
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import { CODE_CONFIRM } from '../../../constants/regular_expressions'
import { messageConfirmAccount } from '../../../utils/messagesNotifications';
import { COLORS, COLORGB2 } from '../../../constants/colors';
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
            <Text style={style.textRegular18Blue}>
              Verificación de Cuenta
            </Text>
            <Text style={style.textRegular12GrayDark}>
              Se envió el Código de Confirmación a su email.
            </Text>
          </View>
          <View style={style.containerInputs}>
            <TextField
              titleTextStyle={style.textRegular12GrayDark}
              labelTextStyle={style.textRegular12GrayDark}
              label="Email a Verificar"
              value= { this.state.confirmationEmail }
              onChangeText={ (value) => this.setState({ confirmationEmail: value }) }
              baseColor={COLORS.grayDark}
              tintColor={COLORS.blue}
              textColor= {COLORS.blue}
              labelFontSize={12}
              lineWidth={1}
              inputContainerPadding={6}
              error={this.state.errorName}
              errorColor={COLORS.redMedium}
            />
              
            <TextField
              titleTextStyle={style.textRegular12GrayDark}
              labelTextStyle={style.textRegular12GrayDark}
              title = 'Número de 6 Dígitos'
              label="Código de Confirmación"
              onChangeText={ (value) => this.setState({ confirmationCode: value }) }
              keyboardType='numeric'
              baseColor={COLORS.grayDark}
              tintColor={COLORS.blue}
              textColor= {COLORS.blue}
              labelFontSize={12}
              lineWidth={1}
              inputContainerPadding={6}
              error={this.state.errorName}
              errorColor={COLORS.redMedium}
              />
            </View>
            <View style={style.containerButtons}>
              <Button
                title='Verificar Cuenta'
                testID={'submitConfirmation'}
                onPress={ this.handleConfirmationCode }
                buttonStyle={[style.buttonSignTwo,{marginBottom: 15}]}
                titleStyle={ style.textRegular16White }
                disabled={ !this.validateData() }
                loading = {this.state.loading}
              />

              <Button
                title='Cancelar'
                testID={'submitConfirmation'}
                onPress={ this.navigateAuth }
                buttonStyle={ style.buttonSignTwo }
                titleStyle={ style.textRegular16White }
              />
            </View>

        </View>    
     
      </View>
    )
  }
}

export default withNavigation(Confirmation);
