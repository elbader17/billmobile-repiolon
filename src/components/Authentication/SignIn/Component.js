import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import style from './style';

class SignIn extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '@Am1234!',
        name:'',
        confirmPassword: '@Am1234!',
        hidePassword: true
      };
    }

    // function used to change password visibility
    managePasswordVisibility = () => {
      this.setState({ hidePassword: !this.state.hidePassword });
    }

    handleSignIn = () => {
      const { email, password } = this.state;
      const { signIn } = this.props;
      signIn(email, password);
            
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
                value={this.state.email}
                label="Email"
                onChangeText={this.setEmail}
                placeholder="Tu email"
                style={ style.textBox }
              />
            </View>
            <View style={ style.textBoxBtnHolder }>
              <TextInput 
                value={this.state.password}
                onChangeText={this.setPassword}
                underlineColorAndroid="transparent" 
                placeholder="Contraseña"
                style={ style.textBox }
                secureTextEntry={ this.state.hidePassword } 
                style={ style.textBox }
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

            <Text style={ style.textSignIn }>
              ¿No tienes una cuenta? Registrate
            </Text>

            <Button
              title='ENTRAR'
              testID={'submitSignIn'}
              onPress={ this.handleSignIn }
              buttonStyle={ style.submit }
              titleStyle={ style.submitText }
              disabledTitleStyle={ style.submitText }
              disabledStyle={ style.submitDisabled }
              disabled={ true }
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

export default SignIn;
