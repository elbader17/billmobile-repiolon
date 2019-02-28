import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from "react-native-elements";
import Confirmation from '../Confirmation';
import style from './style';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          name:'',
          confirmPassword: '',
          confirmationEmail:'',
          selectedIndex: 0,
          validateData: true,
          validEmail: true,
          validPass: true,
          hidePassword: true,
          hideConfirmPassword: true
        };
    }

    // function used to change password visibility
    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    // function used to change confirmp assword visibility
    manageConfirmPasswordVisibility = () => {
        this.setState({ hideConfirmPassword: !this.state.hideConfirmPassword });
    }

    handleSignUp = () => {
        const { name, email, password, confirmPassword } = this.state;
        const attributes = {
            email:email,
            name:name,
        };
        const { signUp } = this.props;
        signUp(password, email,attributes);
        this.setState({showConfirmationModal: true});
        
    }

    handleConfirmationCode = () => {
        const { confirmationEmail, confirmationCode } = this.state;
        const { confirmCode } = this.props;
        confirmCode(confirmationEmail,confirmationCode,{})
    }

    isEmail = (email) => {
        var re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        var bool = re.test(String(email).toLowerCase());
        this.state.validEmail = !bool;
        this.state.validateData = !bool || this.state.validPass;
        return bool;
    }

    isPasswordCoorrect = (password) => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var bool = strongRegex.test(password);
        this.state.validPass = !bool;
        this.state.validateData = !bool || this.state.validEmail;
        return (bool);
    }

    setName = (value) => this.setState({ name: value})
    setEmail = (value) => this.setState({ email: value })
    setPassword = (value) => this.setState({ password: value })
    setConfirmPassword = (value) => this.setState({ confirmPassword: value })
    
    render() {
        const hide = require('../../../images/hide.png')
        const show = require('../../../images/show.png')
        return(
            <View style={ style.cotainer }>
              <View style = { style.container2 }>
                <View style={ style.textBoxBtnHolder }>
                  <TextInput
                    onChangeText={ this.setName }
                    placeholder="Tu nombre"
                    style={ style.textBox }
                  />
                </View>
                <View style={ style.textBoxBtnHolder }>
                  <TextInput
                    onChangeText={ this.setEmail }
                    placeholder="Tu email"
                    style={ style.textBox }
                    onRef={ r => { this.state.email = r }}
                    value={this.state.email}
                    editable={ !this.props.fetching }
                    valid={ this.isEmail(this.state.email) }
                    returnKeyType='next'
                  />
                </View>
                <View style={ style.textBoxBtnHolder }>
                  <TextInput 
                    underlineColorAndroid="transparent" 
                    placeholder="Contraseña"
                    style={ style.textBox }
                    secureTextEntry={ this.state.hidePassword } 
                    valid={ this.isPasswordCoorrect(this.state.password) }
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
                    underlineColorAndroid="transparent" 
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

                <Text style={ style.textSignIn }>
                  ¿Ya tienes una cuenta? Iniciar Sesión
                </Text>

                <Button
                  title='CREAR CUENTA'
                  testID={ 'submitSignUp' }
                  onPress={ this.handleSignUp }
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
              <Modal visible={ this.props.showConfirmationModal }>
                <Confirmation/>
              </Modal>

            </View>
        )

    }
}

export default SignUp;