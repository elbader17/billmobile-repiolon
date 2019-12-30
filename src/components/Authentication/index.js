import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import Signup from './SignUp';
import Signin from './SignIn';
import style from './style';
import { GRADIANTBLUE2, GRADIENTYELLOW, GRADIANTBLUELIGHT, COLORS } from '../../constants/colors';

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
                      "Tu asesor contable online!"
                    </Text>
                  </View>
                
              </View>
            
              <View style={style.inLineSpaceAround}>
                <Button
                  title='Registrarse'
                  TouchableComponent={TouchableOpacity}
                  onPress={() => this.setState({selectedSignUp: true})}
                  buttonStyle={ this.state.selectedSignUp ? style.buttonSign : style.buttonSignDisable }
                  titleStyle={ style.textRegular14White }
                />
                <Button
                  title='Iniciar Sesión'
                  TouchableComponent={TouchableOpacity}
                  onPress={() => this.setState({selectedSignUp: false})}
                  buttonStyle={ this.state.selectedSignUp ? style.buttonSignDisable : style.buttonSign }
                  titleStyle={ style.textRegular14White }
                />
              </View>

              <View style={style.containerInputs}>
                {this.renderSignUpSignIn()} 
              </View>
            </View>
            
            <View style={style.containerFooter}>
              <View style={style.gradientBottom}>
               <Text style={style.textRegular11White}>
                  Al registrarte estas aceptando nuestros
                </Text>
                <Text style={style.textRegular11WhiteBold}>
                  Términos, Condiciones y Políticas de Privacidad
                </Text>
              </View> 
                
            </View>
          </View>
      </ScrollView>
    );
  }
}

export default Authentication;