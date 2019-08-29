import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import Signup from './SignUp';
import Signin from './SignIn';
import style from './style';
import { GRADIANTBLUE } from '../../constants/colors';

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
          <Signup navigation={this.props.navigation} />
        </View>
      );
    }else {
      return (
        <View>
          <Signin navigation={this.props.navigation} />
        </View>
      );
    }
  }

  render() {
    const logo = require('../../images/logoBill.png')
    const buttonOn = [style.button,style.textRegular14BlueBold];
    const buttonOff = [style.buttonDisabled,style.textRegular14Gray];
    return(
      <ScrollView>
          <View style={style.container}>
            <View style={ style.containerHeader }>
              <Image source={ logo } style={ style.imageHeader } />
              <LinearGradient
                colors={ GRADIANTBLUE }
                start={{x: 0.0, y: 1.0}} 
                end={{x: 1.0, y: 1.0}}
                style={style.gradientStyle}
              >
                <View style={style.textCenter}>
                  <Text style={style.textRegular16White}>
                    "Tu contador online"
                  </Text>
                </View>
              </LinearGradient>
            </View>
            <View style={style.inLine}>
              <Button
                title='Registrarse'
                testID='register'
                onPress={() => this.setState({selectedSignUp: true})}
                buttonStyle={ this.state.selectedSignUp ? buttonOn[0] : buttonOff[0] }
                titleStyle={ this.state.selectedSignUp ? buttonOn[1] : buttonOff[1] }
              />
              <Button
                title='Iniciar Sesión'
                testID='signin'
                onPress={() => this.setState({selectedSignUp: false})}
                buttonStyle={ this.state.selectedSignUp ? buttonOff[0] : buttonOn[0] }
                titleStyle={ this.state.selectedSignUp ? buttonOff[1] : buttonOn[1] }
              />
            </View>
            {this.renderSignUpSignIn()} 
            <View style={style.containerFooter}>
              <LinearGradient
                colors={ GRADIANTBLUE }
                start={{x: 0.0, y: 1.0}} 
                end={{x: 1.0, y: 1.0}}
                style={style.gradientBottom}
              >
               <Text style={style.textRegular11White}>
                  Al registrarte estas aceptando nuestros
                </Text>
                <Text style={style.textRegular11WhiteBold}>
                  Términos, Condiciones y Políticas de Privacidad
                </Text>
              </LinearGradient> 
                
            </View>
          </View>
      </ScrollView>
    );
  }
}

export default Authentication;