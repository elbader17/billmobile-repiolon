import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from "react-native-elements";
import { COLORS } from '../../../constants/colors';
import { 
  showMessageEmailFormat, 
  showMessagePassFormat, 
  showMessageMatchPass 
} from '../../../utils/showMessage';
import { validateDataSignUp } from '../../../utils/validations';
import style from './style';

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
      loading: false
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
    const { signUp } = this.props;
    this.setLoading(true);
    signUp(password, email, attributes)
    .then((data) => {
      this.setLoading(false);
      if(data){
        this.props.navigation.navigate('Authentication', { index: false  });
      }else{
        if (data != undefined)
          this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
      }
    })
    .catch(() => {
      this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
    })
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
            {showMessageEmailFormat(this.state.messageEmailFormat, this.state.email)}
            <TextInput
              label="Email"
              value={ this.state.email }
              onChange={ this.validateEmail }
              onChangeText={ this.setEmail }
              onFocus={() => this.setState({messageEmailFormat: true})}
              onEndEditing={() => this.setState({messageEmailFormat: false})}
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
            {showMessagePassFormat(this.state.messagePassFormat, this.state.password)}
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
            {showMessageMatchPass(this.state.messageMatchPass, this.state.password, this.state.confirmPassword)}
            <View style={style.inputPass}>
              <TextInput
                label="ConfirmPassword"
                onChange={ this.validateConfirmPass }
                onChangeText={ this.setConfirmPassword }
                onFocus={() => this.setState({messageMatchPass: true})}
                onEndEditing={() => this.setState({messageMatchPass: false})}
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
          
          <Text style={[style.textRegular11GrayDark, {paddingVertical: 15}] }>
            ¿Ya tienes una cuenta?
            <Text style={ style.textRed }> Iniciar Sesión</Text>
          </Text>
          
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
        </View>
        
      </View>
    )
  }
}

export default SignUp;