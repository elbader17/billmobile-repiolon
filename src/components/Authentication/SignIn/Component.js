import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { showMessage } from "react-native-flash-message";
import LinearGradient from 'react-native-linear-gradient';
import { 
  messageErrorSignIn,
  messageErrorSignInConfirm,
  messageErrorSignInExist,
  messageErrorSignInData
} from '../../../utils/messagesNotifications';
import { Button } from "react-native-elements";
import style from '../SignUp/style';
import { GRADIENTYELLOW } from '../../../constants/colors';


const EMAIL_REGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '@mozej.com',
      password: '@Martin44',
      hidePassword: true,
      loading: false
    };
  }

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    const { signIn } = this.props;
    this.setLoading(true);
    signIn(email, password)
    .then( (_data) => {
      if(this.props.jwtToken !== ''){
        console.log(this.props.jwtToken);
        this.navigateNext();
      } else {
        if ( _data.message === 'User does not exist.'){
          showMessage(messageErrorSignInExist)
          this.props.navigation.navigate('Authentication');
        }else if ( _data.message === 'User is not confirmed.'){
          showMessage(messageErrorSignInConfirm);
          this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
        }else {
          showMessage(messageErrorSignInData);
          this.props.navigation.navigate('Authentication');
        }
        this.setLoading(false);
      }
    })
    .catch(err => showMessage(messageErrorSignIn)); //incluir err.message
  }

  navigateNext = () => {
    if (this.props.fiscalIdentityComplete) {
      this.props.navigation.navigate('Home');
    } else{
      this.props.navigation.navigate('Configure');
    }
  }

  validateData = () => {
    const isValidPassword = PASSWORD_REGEXP.test(this.state.password);
    const isValidEmail = EMAIL_REGEXP.test(String(this.state.email).toLowerCase());
    return (isValidPassword && isValidEmail);
  }

  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    const hide = require('../../../images/hide.png')
    const show = require('../../../images/show.png')
    return(
      <View style={style.container}>
        <View style={style.containerInputs}>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Email"
              onChangeText={this.setEmail}
              value={this.state.email}
              placeholder="Tu email"
              style={ style.textBox }
              keyboardType='email-address'
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
          <LinearGradient
            colors={ GRADIENTYELLOW }
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1.0, y: 1.0}}
            style={{borderRadius: 25, marginTop: 15}}
          >
            <Button
              title='ENTRAR'
              testID={'submitSignIn'}
              onPress={ this.handleSignIn }
              buttonStyle={ style.submit }
              titleStyle={ style.textRegular14WhiteBold }
              disabledTitleStyle={ style.textRegular14WhiteBold}
              disabledStyle={ style.submitDisabled }
              disabled={ !this.validateData() }
              loading = {this.state.loading}
            />
          </LinearGradient>
        </View>
        
      </View>
    )
  }
}

export default SignIn;
