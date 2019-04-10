import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from "react-native-elements";
import Confirmation from '../Confirmation';
import style from './style';

const EMAIL_REGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name:'',
      confirmPassword: '',
      confirmationEmail:'',
      hidePassword: true,
      hideConfirmPassword: true
    };
  }

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  manageConfirmPasswordVisibility = () => {
    this.setState({ hideConfirmPassword: !this.state.hideConfirmPassword });
  }

  handleSignUp = () => {
    const { name, email, password } = this.state;
    const attributes = {
      email:email,
      name:name,
    };
    const { signUp } = this.props;
    signUp(password, email, attributes);
  }

  handleConfirmationCode = () => {
    const { confirmationEmail, confirmationCode } = this.state;
    const { confirmCode } = this.props;
    confirmCode(confirmationEmail,confirmationCode,{})
  }

  validateData = () => {
    const isValidPassword = PASSWORD_REGEXP.test(this.state.password);
    const isValidEmail = true// EMAIL_REGEXP.test(String(this.state.email).toLowerCase());
    return (isValidPassword && isValidEmail);
  }

  setName = (value) => this.setState({ name: value})
  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })
  setConfirmPassword = (value) => this.setState({ confirmPassword: value })
    
  render() {
    const hide = require('../../../images/hide.png')
    const show = require('../../../images/show.png')
    return(
      <View>
        <View style = { style.container }>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Nombre"
              onChangeText={ this.setName }
              placeholder="Tu nombre"
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Email"
              value={ this.state.email }
              onChangeText={ this.setEmail }
              placeholder="Tu email"
              style={ style.textBox }
              onRef={ r => { this.state.email = r }}
              editable={ !this.props.fetching }
              returnKeyType='next'
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput 
              label="Password"
              value={ this.state.password }
              onChangeText={ this.setPassword }
              placeholder="Contraseña"
              style={ style.textBox }
              secureTextEntry={ this.state.hidePassword }
            />        
            <TouchableOpacity 
              activeOpacity={ 0.8 } 
              style={ style.visibilityBtn } 
              onPress={ this.managePasswordVisibility }
            >
              <Image 
                source={( this.state.hidePassword ) ? hide : show } 
                style={ style.btnImage } 
              />
            </TouchableOpacity>
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput 
              label="ConfirmPassword"
              onChangeText={ this.setConfirmPassword }
              placeholder="Confirmar Contraseña"
              style={ style.textBox }
              secureTextEntry={ this.state.hideConfirmPassword } 
            />        
            <TouchableOpacity 
              activeOpacity={ 0.8 } 
              style={ style.visibilityBtn } 
              onPress={ this.manageConfirmPasswordVisibility }
            >
              <Image 
                source={( this.state.hideConfirmPassword ) ? hide : show } 
                style={ style.btnImage } 
              />
            </TouchableOpacity>
          </View>   

          <TouchableOpacity>
            <Text style={[style.textRegular11GrayDark, {paddingVertical: 15}] }>
            ¿Ya tienes una cuenta? 
            <Text style={ style.textRed }> Iniciar Sesión</Text>
            </Text>
          </TouchableOpacity>

          <Button
            title='CREAR CUENTA'
            testID={ 'submitSignUp' }
            onPress={ this.handleSignUp }
            value={this.state.email}
            buttonStyle={ style.submit }
            titleStyle={ style.textRegular14White }
            disabledTitleStyle={ style.textRegular14White}
            disabledStyle={ style.submitDisabled }
            disabled={ !this.validateData() }
          />
        </View> 
        <View style={style.containerFooter}>
            <Text style={style.textRegular11GrayDark}>
              Al registrarte estas aceptando nuestros
            </Text>
            <Text style={style.textRegular11GrayDarkBold}>
              Términos y Condiciones y Políticas de Privacidad
            </Text>
          </View>  
        <Modal visible={ this.props.showConfirmationModal }>
          <Confirmation/>
        </Modal>
      </View>
    )
  }
}

export default SignUp;