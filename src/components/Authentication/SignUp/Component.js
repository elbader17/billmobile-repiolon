import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { COLORS } from '../../../constants/colors';
import { 
  showBarEmailFormat, 
  showBarPassFormat, 
  showBarMatchPass
} from '../../../utils/showMessage';
import { 
  messageEmail, 
  messagePass, 
  messageConfirmPass
} from '../../../utils/messagesNotifications'
import { validateDataSignUp } from '../../../utils/validations';
import style from './style';
import { GRADIENTYELLOW } from '../../../constants/colors';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '@mozej.com',
      password: '@Martin44',
      name:'martin',
      confirmPassword: '@Martin44',
      hidePassword: true,
      hideConfirmPassword: true,
      messagePassFormat: false,
      messageEmailFormat: false,
      messageMatchPass: false,
      loading: false,
      typeMessage: 'danger'
    };
  }

  managePasswordVisibility = () => this.setState({ hidePassword: !this.state.hidePassword });
  manageConfirmPasswordVisibility = () => this.setState({ hideConfirmPassword: !this.state.hideConfirmPassword });

  handleSignUp = () => {
    const { name, email, password } = this.state;
    const attributes = {
      email:email,
      name:name,
    };
    this.setLoading(true);
    const { signUp } = this.props;
    signUp(password, email, attributes)
    .then((data) => {
      this.setLoading(false);
      if(data)
        this.props.navigation.navigate('Authentication');
      else{
        if (data != undefined){
          this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
        }
      }
    })
  }

  showFormatMessage = type => {
    switch (type) {
      case 'email':
        this.setState({messageEmailFormat: true});
        showMessage(messageEmail); 
        break;  
      case 'pass':
        this.setState({messagePassFormat: true});
        showMessage(messagePass);  
        break; 
      case 'confirmpass':
        this.setState({messageMatchPass: true});
        showMessage(messageConfirmPass);  
        break; 
      default: null
    }
  }
  
  hideFormatMessage = type => {
    switch (type) {
      case 'email':
        this.setState({messageEmailFormat: false});
      case 'pass':
        this.setState({messagePassFormat: false});
      case 'confirmpass':
        this.setState({messageMatchPass: false});
      default: null
    }
    hideMessage();   
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
              placeholderTextColor={COLORS.gray}
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            {showBarEmailFormat(this.state.messageEmailFormat, this.state.email)}
            <TextInput
              label="Email"
              value={ this.state.email }
              onChange={ this.validateEmail }
              onChangeText={ this.setEmail }
              onFocus={() => this.showFormatMessage('email')}
              onEndEditing={() => this.hideFormatMessage('email')}
              placeholder="Tu email"
              placeholderTextColor={COLORS.gray}
              style={ style.textBox }
              onRef={ r => { this.state.email = r }}
              editable={ !this.props.fetching }
              returnKeyType='next'
              keyboardType='email-address'
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <View>
            {showBarPassFormat(this.state.messagePassFormat, this.state.password)}
            <View style={style.inputPass}>
            <TextInput
              label="Password"
              value={ this.state.password }
              onChange={ this.validatePass }
              onChangeText={ this.setPassword }
              onFocus={() => this.showFormatMessage('pass')}
              onEndEditing={() => this.hideFormatMessage('pass')}
              placeholder="Contraseña"
              placeholderTextColor={COLORS.gray}
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
            {showBarMatchPass(this.state.messageMatchPass, this.state.password, this.state.confirmPassword)}
            <View style={style.inputPass}>
              <TextInput
                label="ConfirmPassword"
                onChange={ this.validateConfirmPass }
                onChangeText={ this.setConfirmPassword }
                onFocus={() => this.showFormatMessage('confirmpass')}
                onEndEditing={() => this.hideFormatMessage('confirmpass')}
                value={ this.state.confirmPassword }
                placeholder="Confirmar Contraseña"
                placeholderTextColor={COLORS.gray}
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
          <LinearGradient
            colors={ GRADIENTYELLOW }
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1.0, y: 1.0}}
            style={{borderRadius: 25, marginTop: 15}}
          >
            <Button
              title='CREAR CUENTA'
              testID='submitSignUp'
              onPress={ this.handleSignUp }
              value={this.state.email}
              buttonStyle={ style.submit }
              titleStyle={ style.textRegular14WhiteBold }
              disabledTitleStyle={ style.textRegular14WhiteBold}
              disabledStyle={ style.submitDisabled }
              disabled={ !validateDataSignUp(this.state.password, this.state.confirmPassword, this.state.email, this.state.name)}
              loading = {this.state.loading}
            />
          </LinearGradient>
        </View>
        
      </View>
    )
  }
}

export default SignUp;