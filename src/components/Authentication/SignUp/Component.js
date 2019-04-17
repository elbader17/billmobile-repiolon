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
      password: '@Martin44',
      name:'Agustin',
      confirmPassword: '@Martin44',
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
      <View style={style.container}>
        <View style = { style.containerInputs }>
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
              keyboardType='email-address'
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
              value={ this.confirmPassword }
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
            titleStyle={ style.textRegular14WhiteBold }
            disabledTitleStyle={ style.textRegular14WhiteBold}
            disabledStyle={ style.submitDisabled }
            disabled={ !this.validateData() }
          />
        </View>
        <Modal visible={ this.props.showConfirmationModal }>
          <Confirmation/>
        </Modal>
      </View>
    )
  }
}

export default SignUp;
