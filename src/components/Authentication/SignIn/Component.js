import React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { COLORGY, COLORS, COLORGB2 } from '../../../constants/colors';
import style from '../style';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '@mozej.com',
      password: '@Martin44',
      hidePassword: true,
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
        this.setLoading(false);
      }
    })
    .catch(err => {
      this.setState({error: 'ERROR al ingresar, intente nuevamente!'});
      console.log(err);
    });
  }

  handleConfirm = () => {
    this.props.navigation.navigate('ConfirmationCodeRegister', { email: this.state.email });
    this.setState({confirm: false})
  }

  navigateNext = () => {
    if (this.props.fiscalIdentityComplete) {
      this.props.navigation.navigate('Home');
    } else{
      this.props.navigation.navigate('Configure');
    }
  }

  setEmail = (value) => this.setState({ email: value })
  setPassword = (value) => this.setState({ password: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <View>
        <TextField
          label="Email"
          value={this.state.email}
          onChangeText={this.setEmail}
          onFocus={()=>{this.setState({error: undefined, confirm: false})}}
          baseColor={COLORS.gray}
          textColor= {COLORS.grayDark}
          tintColor={COLORS.blueMedium}
          lineWidth={1}
          labelFontSize={12}
          inputContainerPadding={6}
          error={this.state.error}
          errorColor={COLORS.redMedium}
        />
        <View>
          <PasswordInputText
            label='Contraseña'
            value={this.state.password}
            onChangeText={this.setPassword}
            onFocus={()=>{this.setState({error: undefined, confirm: false})}}
            baseColor={COLORS.gray}
            tintColor={COLORS.blueMedium}
            textColor= {COLORS.grayDark}
            labelFontSize={12}
            labelHeight={25}
            lineWidth={1}
            inputContainerPadding={7}
            iconColor= {COLORS.gray}
            iconSize={20}
            error={this.state.error}
            errorColor={COLORS.redMedium}
          />
        </View>

        <View style={style.containerButtonSignTwo}>
          <Button
            title='Ingresar'
            testID={'submitSignIn'}
            onPress={ this.handleSignIn }
            buttonStyle={ style.buttonSignTwo }
            titleStyle={ style.textRegular16White }
            loading = {this.state.loading}
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGY}
          />
          <View style={this.state.confirm ? style.displayFlex : style.displayNone}>
            <Button
              title='Confirmar Cuenta'
              testID={'submitSignIn'}
              onPress={ this.handleConfirm }
              buttonStyle={ style.buttonConfirm }
              titleStyle={ style.textRegular16White }
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGB2}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default SignIn;