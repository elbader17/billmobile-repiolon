import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import Signup from './SignUp';
import Signin from './SignIn';
import style from './style';
import { GRADIENTYELLOW, GRADIANTBLUELIGHT } from '../../constants/colors';

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
    } else {
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
              <LinearGradient
                colors={ GRADIANTBLUELIGHT }
                start={{x: 0.0, y: 1.0}} 
                end={{x: 1.0, y: 1.0}}
                style={style.textSubLogo}
              >
                <Text style={style.textRegular14White}>
                  Tu asesor contable online!
                </Text>
              </LinearGradient>    
            </View>
              <View style={style.inLineSpaceAround}>
                <Button
                  title='Registrarse'
                  TouchableComponent={TouchableOpacity}
                  onPress={() => this.setState({selectedSignUp: true})}
                  buttonStyle={ this.state.selectedSignUp ? style.buttonSign : style.buttonSignDisable }
                  titleStyle={ this.state.selectedSignUp ? style.textRegular14Blue : style.textRegular14Gray }
                />
                <Button
                  title='Iniciar Sesión'
                  TouchableComponent={TouchableOpacity}
                  onPress={() => this.setState({selectedSignUp: false})}
                  buttonStyle={ this.state.selectedSignUp ? style.buttonSignDisable : style.buttonSign }
                  titleStyle={ this.state.selectedSignUp ? style.textRegular14Gray : style.textRegular14Blue }
                />
              </View>
              <ScrollView>
                {this.renderSignUpSignIn()} 
              </ScrollView>
            
          </View>  
          <View style={style.containerFooter}>
            <LinearGradient
              colors={ GRADIANTBLUELIGHT }
              start={{x: 0.0, y: 1.0}} 
              end={{x: 1.0, y: 1.0}}
              style={{flex: 1, justifyContent: 'center', borderTopLeftRadius: 100, borderTopRightRadius: 100}}
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