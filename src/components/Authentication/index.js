import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { Button } from "react-native-elements";
import Signup from './SignUp';
import Signin from './SignIn';
import style from './style';

class Authentication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSignUp: false, 
    };
  }

  renderSignUpSignIn = () => {  
    if (this.state.selectedSignUp) {
      return (
        <View>
          <Signup/>
        </View>
      );
    }else {
      return (
        <View>
          <Signin/>
        </View>
      );
    }
  }

  render() {
    const logo = require('../../images/iconBill.png')
    const buttonOn = [style.button,style.textRegular12BlueBold];
    const buttonOff = [style.buttonDisabled,style.textRegular12WhiteBold];
    return(
      <ScrollView>
          <View style={style.container}>
            <View style={ style.containerHeader }>
              <Image source={ logo } style={ style.imageHeader } />
              <Text style={[style.textRegular14White, {paddingTop: 10}]}>{"Hacé facturas electronicas rápido"}.{"\n"} 
              Y hacelo seguro</Text>
            </View>
            <View style={style.inLine}>
              <Button
                title='REGISTRAR'
                testID='register'
                onPress={() => this.setState({selectedSignUp: true})}
                buttonStyle={ this.state.selectedSignUp ? buttonOn[0] : buttonOff[0] }
                titleStyle={ this.state.selectedSignUp ? buttonOn[1] : buttonOff[1] }
              />
              <Button
                title='INICIAR SESIÓN'
                testID='signin'
                onPress={() => this.setState({selectedSignUp: false})}
                buttonStyle={ this.state.selectedSignUp ? buttonOff[0] : buttonOn[0] }
                titleStyle={ this.state.selectedSignUp ? buttonOff[1] : buttonOn[1] }
              />
            </View>
            {this.renderSignUpSignIn()} 
            <View style={style.containerFooter}>
              <Text style={style.textRegular11GrayDark}>
                Al registrarte estas aceptando nuestros
              </Text>
              <Text style={style.textRegular11GrayDarkBold}>
                Términos y Condiciones y Políticas de Privacidad
              </Text> 
            </View>
          </View>
      </ScrollView>
    );
  }
}

export default Authentication;