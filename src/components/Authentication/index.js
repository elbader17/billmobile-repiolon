import React from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonGroup } from "react-native-elements";
import Signup from './SignUp';
import Signin from './SignIn';
import style from './style';


class Authentication extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '@Am1234!',
        name:'',
        confirmPassword: '@Am1234!',
        selectedIndex: 0,
      };
    }

    updateIndex = () => {
      const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
      this.setState({ selectedIndex: newIndex });
    }

    renderSignUpSignIn = () => {
      if (this.state.selectedIndex === 0) {
        return (
          <View>
            <Signup/>
          </View>
        );
      } else {
        return (
          <View>
            <Signin/>
          </View>
        );
      }
    }
    
    render() {
      const logo = require('../../images/iconBill.png')
      const component1 = () => <Text style={this.state.selectedIndex === 0 ? a : b}>REGISTRAR</Text>
      const component2 = () => <Text style={this.state.selectedIndex === 1 ? a : b}>INICIAR SESIÓN</Text>
      const buttons = [{ element: component1 }, { element: component2 }]
      const a = style.buttonOn
      const b = style.buttonOff

      return(
        <View style={style.container}>
          <View style={style.container2}>
            <Image source={logo} style={style.image} />
            <Text style={style.textTittle}>Hacé facturas electronicas rápido.{"\n"} 
            Y hacelo seguro</Text>
          </View>
          <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={this.state.selectedIndex}
              buttons={buttons}
              containerStyle={style.buttons}
              textStyle={style.text}
              selectedButtonStyle={style.buttonSelected}
          />
          {this.renderSignUpSignIn()}
       </View>
      );
    }
}

export default Authentication;
