import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import Confirmation from '../Confirmation';
import style from './style';

const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '@mozej.com',
      password: '@Martin44',
      name:'Martin',
      confirmPassword: '@Martin44',
      confirmationEmail:'',
      hidePassword: true,
      hideConfirmPassword: true,
      messagePassFormat: false,
      messageEmailFormat: false,
      messageMatchPass: false,
      loading: false
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
    this.setLoading(true);
    signUp(password, email, attributes)
      .then(() => {
        this.setLoading(false);
        this.props.navigation.navigate('ConfirmationCodeRegister');
      })
  }

  validatePass = () => {
    const isValidPassword = PASSWORD_REGEXP.test(this.state.password);
    return isValidPassword;
  }

  validateEmail = () => {
    const isValidEmail = EMAIL_REGEXP.test(this.state.email);
    return isValidEmail;
  }

  validateConfirmPass = () => {
    const matchPass = this.state.password === this.state.confirmPassword;
    return matchPass;
  }

  validateData = () => {
    return (this.validatePass() && this.validateConfirmPass() && this.validateEmail() && this.state.name!='');
  }

  showMessagePassFormat = () => {
    if (this.state.messagePassFormat) {
      return(
        <Text style={this.validatePass() ? style.textFormatPassValid : style.textFormatPass }>
          Debe contener al menos: 8 Caracteres, 1 Mayúscula, 1 Número y 1 Caracter Especial
        </Text>
      )
    }
  }

  showMessageEmailFormat = () => {
    if (this.state.messageEmailFormat) {
      return(
        <Text style={this.validateEmail() ? style.textFormatEmailValid : style.textFormatEmail }>
          Nombre@Dominio.xxx
        </Text>
      )
    }
  }

  showMessageMatchPass = () => {
    if (this.state.messageMatchPass) {
      return(
        <Text style={this.validateConfirmPass() ? style.textConfirmPassValid : style.textConfirmPass }>
          Contraseñas coincidentes
        </Text>
      )  
    }
  }

  setName = (value) => this.setState({ name: value})
  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })
  setConfirmPassword = (value) => this.setState({ confirmPassword: value })
  setLoading = (bool) => this.setState({ loading: bool })
  
  render() {
    const hide = require('../../../images/hide.png')
    const show = require('../../../images/show.png')
    return(
      <View style={style.container}>
        <View style = { style.containerInputs }>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Nombre"
              value={ this.state.name }
              onChangeText={ this.setName }
              placeholder="Tu nombre"
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            {this.showMessageEmailFormat()}
            <TextInput
              label="Email"
              value={ this.state.email }
              onChange={ this.validateEmail }
              onChangeText={ this.setEmail }
              onFocus={() => this.setState({messageEmailFormat: true})}
              onEndEditing={() => this.setState({messageEmailFormat: false})}
              placeholder="Tu email"
              style={ style.textBox }
              onRef={ r => { this.state.email = r }}
              editable={ !this.props.fetching }
              returnKeyType='next'
              keyboardType='email-address'
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            {this.showMessagePassFormat()}
            <View>
            <View style={style.inputPass}>
            <TextInput
              label="Password"
              value={ this.state.password }
              onChange={ this.validatePass }
              onChangeText={ this.setPassword }
              onFocus={() => this.setState({messagePassFormat: true})}
              onEndEditing={() => this.setState({messagePassFormat: false})}
              placeholder="Contraseña"
              style={ style.textBoxPass }
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
            </View>
          </View>
          <View style={ style.textBoxBtnHolder }>
            <View>
            {this.showMessageMatchPass()}
            <View style={style.inputPass}>
              <TextInput
                label="ConfirmPassword"
                onChange={ this.validateConfirmPass }
                onChangeText={ this.setConfirmPassword }
                onFocus={() => this.setState({messageMatchPass: true})}
                onEndEditing={() => this.setState({messageMatchPass: false})}
                value={ this.state.confirmPassword }
                placeholder="Confirmar Contraseña"
                style={ style.textBoxPass }
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
            </View>
          </View>
          
          <Text style={[style.textRegular11GrayDark, {paddingVertical: 15}] }>
            ¿Ya tienes una cuenta?
            <Text style={ style.textRed }> Iniciar Sesión</Text>
          </Text>
          
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
            loading = {this.state.loading}
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(SignUp);
