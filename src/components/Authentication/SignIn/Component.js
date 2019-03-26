import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import style from './style';

const EMAIL_REGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'hh@mozej.com',
      password: '@Martin44',
      name:'',
      hidePassword: true
    };
  }

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    const { signIn } = this.props;
    signIn(email, password)
    .then(() => {
      Alert.alert(this.props.jwtToken);
      this.props.navigation.navigate('Configure');
    })
    .catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }
  
  validateData = () => {
    const isValidPassword = PASSWORD_REGEXP.test(this.state.password);
    const isValidEmail = EMAIL_REGEXP.test(String(this.state.email).toLowerCase());
    return (isValidPassword && isValidEmail);
  }

  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })

  render() {
    const hide = require('../../../images/hide.png')
    const show = require('../../../images/show.png')
    return(
      <View style={ style.container }>
        <View style={ style.container2 }>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Email"
              onChangeText={this.setEmail}
              value={this.state.email}
              placeholder="Tu email"
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Password" 
              onChangeText={this.setPassword}
              value={this.state.password}
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

          <Text style={ style.textRegister }>
            ¿No tienes una cuenta? 
            <Text style={ style.red }> Registrate</Text>
          </Text>

          <Button
            title='ENTRAR'
            testID={'submitSignIn'}
            onPress={ this.handleSignIn }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
            disabled={ !this.validateData() }
            disabledTitleStyle={ style.submitText }
            disabledStyle={ style.submitDisabled }
          />

          <Text style={style.textFooterA}>
            Al registrarte estas aceptando nuestros
          </Text>
          <Text style={style.textFooterB}>
            Términos y Condiciones y Políticas de Privacidad
          </Text>
          
        </View>
      </View>
    )
  }
}

export default withNavigation(SignIn);
