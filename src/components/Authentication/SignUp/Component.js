import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { IconEye, IconEyeOff } from '../../../constants/icons';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { 
  validateName,
  validatePass, 
  validateConfirmPass, 
  validateEmail,
  validateDataSignUp
} from '../../../utils/validations';
import { COLORGY, COLORS } from '../../../constants/colors';
import style from '../style';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '@mozej.com',
      password: '@Martin44',
      name:'martin',
      confirmPassword: '@Martin44',
      confirmAccount: false,
      loading: false,
      iconPassShow: false,
      iconConfirmPassShow: false,
      passRequireShow: false,
      errorName: undefined,
      errorEmail: undefined,
      errorPass: undefined,
      errorConfirmPass: undefined
    };
  }

  handleSignUp = () => {
    const { name, email, password, confirmPassword } = this.state;
    if(!validateDataSignUp(password, confirmPassword, email, name)) {
      if(!validateName(name)) this.setState({errorName: '*Ingrese Nombre de Usuario'});
      if(!validateEmail(email)) this.setState({errorEmail: '*Formato Inválido'});
      if(!validatePass(password)) this.setState({errorPass: '*No Cumple Requisitos'});
      if(!validateConfirmPass(password, confirmPassword)) this.setState({errorConfirmPass: '*Las Contraseñas No Coinciden'});
    } else {
      const attributes = {
        email:email,
        name:name,
      };
      this.setLoading(true);
      const { signUp } = this.props;
      signUp(password, email, attributes)
        .then((data) => {
          console.log(data)
          this.setLoading(false);
          if(data === true)
            this.props.navigation.navigate('Authentication');
          else{
            if (data === false){
              this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
            } else {
                this.setState({errorEmail: 'Email ya existente'})
            }
          }
        })
    }
  }

  setName = (value) => this.setState({ name: value})
  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })
  setConfirmPassword = (value) => this.setState({ confirmPassword: value })
  setLoading = (bool) => this.setState({ loading: bool })
  
  render() {
    const requireShow = this.state.passRequireShow ? 'flex' : 'none';
    const displayName = this.state.errorName === undefined ? 'none' : 'flex';
    const displayEmail = this.state.errorEmail === undefined ? 'none' : 'flex'
    const displayPass = this.state.errorPass === undefined ? 'none' : 'flex'
    const displayConfirmPass = this.state.errorConfirmPass === undefined ? 'none' : 'flex'
    return(
      <View style={style.containerInputs}>   
        <TextInput
          placeholder='Nombre de usuario'
          placeholderTextColor={COLORS.gray}
          value={ this.state.name }
          onChangeText={ this.setName }
          onFocus={()=>{this.setState({errorName: undefined})}}
          style={style.input}
        />
        <View style={{display: displayName, alignItems: 'center'}}>
          <Text style={style.textRegular12Red}>
            {this.state.errorName}
          </Text>
        </View>

        <TextInput
          placeholder='Email'
          placeholderTextColor={COLORS.gray}
          value={ this.state.email }    
          onChangeText={ this.setEmail }
          onFocus={()=>{this.setState({errorEmail: undefined})}}
          style={style.input}
        />
        <View style={{display: displayEmail, alignItems: 'center'}}>
          <Text style={style.textRegular12Red}>
            {this.state.errorEmail}
          </Text>
        </View>
        <View style={{display: requireShow}}>
          <Text style={style.textRegular11Blue}>
            Debe contener al menos 8 Caracteres, Mayúsculas, Minúsculas, Número y Caracter especial.
          </Text>
        </View>

        <View style={style.passwordContainer}>
          <TextInput
            secureTextEntry={!this.state.iconPassShow}
            placeholder='Contraseña'
            placeholderTextColor={COLORS.gray}
            value={ this.state.password }
            onChangeText={ this.setPassword }
            onFocus={()=>{this.setState({errorPass: undefined, passRequireShow: true})}}
            onBlur={()=>{this.setState({passRequireShow: false})}}
            style={style.inputPass}
          />
          <TouchableOpacity 
            onPress={()=>this.setState({iconPassShow: !this.state.iconPassShow})}>
            {this.state.iconPassShow ? IconEye : IconEyeOff} 
          </TouchableOpacity>
        </View>   
        <View style={{display: displayPass, alignItems: 'center'}}>
          <Text style={style.textRegular12Red}>
            {this.state.errorPass}
          </Text>
        </View>     
        
        <View style={style.passwordContainer}>
          <TextInput
            secureTextEntry={!this.state.iconConfirmPassShow}
            placeholder='Confirmar Contraseña'
            placeholderTextColor={COLORS.gray}
            value={ this.state.confirmPassword }
            onChangeText={ this.setConfirmPassword }
            onFocus={()=>{this.setState({errorConfirmPass: undefined})}}
            style={style.inputPass}
          />
          <TouchableOpacity 
            onPress={()=>this.setState({iconConfirmPassShow: !this.state.iconConfirmPassShow})}>
            {this.state.iconConfirmPassShow ? IconEye : IconEyeOff}
          </TouchableOpacity>
        </View>   
        <View style={{display: displayConfirmPass, alignItems: 'center'}}>
          <Text style={style.textRegular12Red}>
            {this.state.errorConfirmPass}
          </Text>
        </View>  

        <View style={style.containerButtonSignTwo}>
          <Button
            title='Crear Cuenta'
            TouchableComponent={TouchableOpacity}
            testID='submitSignUp'
            onPress={ this.handleSignUp }
            value={this.state.email}
            buttonStyle={ style.buttonSignTwo }
            titleStyle={ style.textBold14White }
            loading = {this.state.loading}
          />
        </View>
        
      </View>
    )
  }
}

export default SignUp;