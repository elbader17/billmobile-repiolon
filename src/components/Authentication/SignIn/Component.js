import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { IconEye, IconEyeOff } from '../../../constants/icons';
import { Button } from "react-native-elements";
import style from '../style';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: false,
      loading: false,
      confirm: false,
      error: undefined
    };
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    const { signIn } = this.props;
    this.setLoading(true);
    signIn(email, password)
      .then( (_data) => {
        if(this.props.jwtToken !== ''){
          this.navigateNext();
        } else {
          if ( _data.message === 'User does not exist.'){
            this.setState({error: 'Email no registrado'})
            this.props.navigation.navigate('Authentication');
          } else if ( _data.message === 'User is not confirmed.'){
            this.setState({confirm: true, error: 'Cuenta no verificada'});
          } else {
            this.setState({error: 'Email o Password incorrectos'})
            this.props.navigation.navigate('Authentication');
          }
        }
        this.setLoading(false);
      })
      .catch(err => {
        this.setState({error: 'ERROR al ingresar, intente nuevamente!'});
        console.log(err);
      });
  }

  handleConfirm = () => {
    this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
    this.setState({confirm: false, error: undefined})
  }

  navigateNext = () => {
    console.log(this.props.fiscalIdentity);
    if (this.props.fiscalIdentityComplete) {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Configure');
    }
  }

  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    const displayError = this.state.error === undefined ? 'none' : 'flex';
    return(
      <View style={style.containerInputs}>
          
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={this.setEmail}
          onFocus={()=>{this.setState({error: undefined, confirm: false})}}
          style={style.input}
        />
        <View style={style.passwordContainer}>
          <TextInput
            secureTextEntry={!this.state.hidePassword}
            placeholder='Contraseña'
            value={this.state.password}
            onChangeText={this.setPassword}
            onFocus={()=>{this.setState({error: undefined, confirm: false})}}
            style={style.inputPass}
          />
          <TouchableOpacity 
            onPress={()=>this.setState({hidePassword: !this.state.hidePassword})}>
            {this.state.hidePassword ? IconEye : IconEyeOff}
          </TouchableOpacity>
        </View>
        <View style={{display: displayError, alignItems: 'center'}}>
          <Text style={style.textRegular12Red}>
            {this.state.error}
          </Text>
        </View>

        <View style={style.containerButtonSignTwo}>
          <Button
            title='Ingresar'
            TouchableComponent={TouchableOpacity}
            testID={'submitSignIn'}
            onPress={ this.handleSignIn }
            buttonStyle={ style.buttonSignTwo }
            disabled={this.state.confirm}
            disabledStyle={ style.buttonSignTwoDisabled}
            titleStyle={ style.textBold14White }
            loading = {this.state.loading}
          />
          <View style={this.state.confirm ? {display: 'flex'} : {display: 'none'}}>
            <Button
              title='Confirmar Cuenta'
              TouchableComponent={TouchableOpacity}
              testID={'submitSignIn'}
              onPress={ this.handleConfirm }
              buttonStyle={ style.buttonConfirm }
              titleStyle={ style.textBold14White }
            />
          </View>
        </View>
      </View>
    )
  }
}

export default SignIn;