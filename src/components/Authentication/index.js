import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import Signup from './SignUp';
import Signin from './SignIn';
import style from './style';
import { GRADIANTBLUE, GRADIENTYELLOW } from '../../constants/colors';

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
                <Button
                  title='Registrarse'
                  testID='register'
                  onPress={() => this.setState({selectedSignUp: true})}
                  buttonStyle={ style.buttonSign }
                  titleStyle={ style.textRegular14White }
                  ViewComponent={LinearGradient}
                  linearGradientProps={{
                    colors: this.state.selectedSignUp ? GRADIENTYELLOW : GRADIANTBLUE,
                    start: {x: 0, y: 1}, end: {x: 1, y: 0.9}
                  }}
                />
                <Button
                  title='Iniciar Sesión'
                  testID='signin'
                  onPress={() => this.setState({selectedSignUp: false})}
                  buttonStyle={ style.buttonSign }
                  titleStyle={ style.textRegular14White }
                  ViewComponent={LinearGradient}
                  linearGradientProps={{
                    colors: this.state.selectedSignUp ? GRADIANTBLUE : GRADIENTYELLOW,
                    start: {x: 0, y: 1}, end: {x: 1, y: 0.9}
                  }}
                />
                
              </View>
              <View style={style.containerInputs}>
                {this.renderSignUpSignIn()} 
              </View>
            </View>
            
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