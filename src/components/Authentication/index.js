import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import Signup from './SignUp';
import Signin from './SignIn';
import style from './style';
import { GRADIANTBLUE2, GRADIENTYELLOW, GRADIANTBLUELIGHT } from '../../constants/colors';

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
    return(
      <ScrollView>
          <View style={style.container}>
            <View style={ style.containerBody }>
              
              <View style={style.containerHeader}>
                <Image source={ logo } style={ style.imageHeader } />
                
                  <View style={style.textSubLogo}>
                    <Text style={style.textMedium16Blue}>
                      "Tu contador online"
                    </Text>
                  </View>
                
              </View>
            
              <View style={style.inLineSpaceAround}>
                <TouchableOpacity onPress={() => this.setState({selectedSignUp: true})} activeOpacity={0.8}>
                  <LinearGradient
                    colors={ this.state.selectedSignUp ? GRADIANTBLUELIGHT : GRADIANTBLUE2 }
                    style={ style.buttonSign }
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                  >
                    <Text style={style.textRegular14White}>Registrarse</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.setState({selectedSignUp: false})} activeOpacity={0.8}>
                  <LinearGradient
                    colors={ this.state.selectedSignUp ? GRADIANTBLUE2 : GRADIANTBLUELIGHT }
                    style={ style.buttonSign }
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                  >
                    <Text style={style.textRegular14White}>Iniciar Sesión</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View style={style.containerInputs}>
                {this.renderSignUpSignIn()} 
              </View>
            </View>
            
            <View style={style.containerFooter}>
              <LinearGradient
                colors={ GRADIANTBLUELIGHT }
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