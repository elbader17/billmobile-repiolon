import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Auth } from 'aws-amplify';
import style from '../SignUp/style';

const EMAIL_REGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'hh@mozej.com',
      password: '@Am12345',
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
    .then( (_data) => {
      if(this.props.jwtToken !== ''){
        this.props.navigation.navigate('Configure');
      } else {
        if ( _data.message === 'User does not exist.'){
          Alert.alert(_data.message);
          this.props.navigation.navigate('Authentication');
        }else if ( _data.message === 'User is not confirmed.'){
          Alert.alert(_data.message);
          this.props.navigation.navigate('ConfirmationCodeRegister');
        }else {
          Alert.alert(_data.message);
          this.props.navigation.navigate('Authentication');
        }
        
        
      }
    
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
      <View>
        <View style={ style.container }>
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

          <TouchableOpacity>
            <Text style={[style.textRegular11GrayDark, {paddingVertical: 15}] }>
              ¿No tienes una cuenta? 
              <Text style={ style.textRed }> Registrate</Text>
            </Text>
          </TouchableOpacity>

          <Button
            title='ENTRAR'
            testID={'submitSignIn'}
            onPress={ this.handleSignIn }
            buttonStyle={ style.submit }
            titleStyle={ style.textRegular14White }
            disabledTitleStyle={ style.textRegular14White }
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
      </View>
    )
  }
}

export default withNavigation(SignIn);
