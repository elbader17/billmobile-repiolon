import React from 'react';
import { View } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import { TextField } from 'react-native-material-textfield';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { 
  validateName,
  validatePass, 
  validateConfirmPass, 
  validateEmail,
  validateDataSignUp
} from '../../../utils/validations';
import { COLORS, COLORGY } from '../../../constants/colors';
import style from '../style';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '@mozej.com',
      password: '@Martin44',
      name:'martin',
      confirmPassword: '@Martin44',
      confirmAccount: false,
      loading: false,
      errorName: undefined,
      errorEmail: undefined,
      errorPass: undefined,
      errorConfirmPass: undefined
    };
  }

  handleSignUp = () => {
    const { name, email, password, confirmPassword } = this.state;
    if(!validateDataSignUp(password, confirmPassword, email, name)) {
      if(!validateName(name)) this.setState({errorName: 'Ingrese Nombre de Usuario'});
      if(!validateEmail(email)) this.setState({errorEmail: 'Formato Inválido'});
      if(!validatePass(password)) this.setState({errorPass: 'No Cumple Requisitos'});
      if(!validateConfirmPass(password, confirmPassword)) this.setState({errorConfirmPass: 'Las Contraseñas No Coinciden'});
    } else {
      const attributes = {
        email:email,
        name:name,
      };
      this.setLoading(true);
      const { signUp } = this.props;
      signUp(password, email, attributes)
      .then((data) => {
        this.setLoading(false);
        if(data === true)
          this.props.navigation.navigate('Authentication');
        else{
          if (data === false){
            this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
          } else {
              this.setState({errorEmail: 'Email ya existente'})
          }
        }
      })
    }
  }

  setName = (value) => this.setState({ name: value})
  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })
  setConfirmPassword = (value) => this.setState({ confirmPassword: value })
  setLoading = (bool) => this.setState({ loading: bool })
  
  render() {
    return(
      <View>
        <TextField
          label='Nombre de usuario'
          value={ this.state.name }
          onChangeText={ this.setName }
          onFocus={()=>{this.setState({errorName: undefined})}}
          baseColor={COLORS.gray}
          tintColor={COLORS.blueMedium}
          textColor= {COLORS.grayDark}
          labelFontSize={12}
          lineWidth={1}
          inputContainerPadding={6}
          error={this.state.errorName}
          errorColor={COLORS.redMedium}
        />
        <TextField  
          label='Email'
          value={ this.state.email }    
          onChangeText={ this.setEmail }
          onFocus={()=>{this.setState({errorEmail: undefined})}}
          baseColor={COLORS.gray}
          tintColor={COLORS.blueMedium}
          textColor= {COLORS.grayDark}
          titleFontSize={10}
          labelFontSize={12}
          labelHeight={20}
          lineWidth={1}
          inputContainerPadding={6}
          error={this.state.errorEmail}
          errorColor={COLORS.redMedium}
        />
        <View>
          <PasswordInputText
            title='Minimo 8 Caracteres, 1 Número, 1 Mayuscula y Minúscula, 1 Caracter Especial'
            label='Contraseña'
            value={ this.state.password }
            onChangeText={ this.setPassword }
            onFocus={()=>{this.setState({errorPass: undefined})}}
            baseColor={COLORS.gray}
            tintColor={COLORS.blueMedium}
            textColor= {COLORS.grayDark}
            titleFontSize={8.5}
            labelHeight={25}
            labelFontSize={12}
            lineWidth={1}
            inputContainerPadding={7}
            iconColor= {COLORS.gray}
            iconSize={20}
            error={this.state.errorPass}
            errorColor={COLORS.redMedium}
          />
        </View>
        <View>
          <PasswordInputText
            label='Confirmar Contraseña'
            value={ this.state.confirmPassword }
            onChangeText={ this.setConfirmPassword }
            onFocus={()=>{this.setState({errorConfirmPass: undefined})}}
            baseColor={COLORS.gray}
            textColor= {COLORS.grayDark}
            titleFontSize={10}
            tintColor={COLORS.blueMedium}
            iconColor= {COLORS.gray}
            iconSize={20}
            inputContainerPadding={7}
            lineWidth={1}
            labelHeight={25}
            labelFontSize={12}
            error={this.state.errorConfirmPass}
            errorColor={COLORS.redMedium}
          />
        </View>

        <View style={style.containerButtonSignTwo}>
          <Button
            title='Crear Cuenta'
            testID='submitSignUp'
            onPress={ this.handleSignUp }
            value={this.state.email}
            buttonStyle={ style.buttonSignTwo }
            titleStyle={ style.textRegular16White }
            loading = {this.state.loading}
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGY}
          />
        </View>
      </View>
    )
  }
}

export default SignUp;