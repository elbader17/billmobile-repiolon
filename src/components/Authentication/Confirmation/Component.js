import React from 'react';
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import { METRICS } from '../../../constants/metrics';

class Confirmation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmationEmail: this.props.navigation.getParam('email', 'e-mail'),
      confirmPassword: '',
    };
  }

  static navigationOptions = {
    title: 'VERIFICAR CUENTA',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  handleConfirmationCode = () => {
    const { confirmationEmail, confirmationCode } = this.state;
    const { confirmCode } = this.props;
    confirmCode(confirmationEmail,confirmationCode,{})
    .then((data) => {
      console.log("data"+data);
      this.props.navigation.navigate('Authentication', { index: true });
    })
    .catch((err) => {
      this.props.navigation.navigate('ConfirmationCodeRegister');
      console.log("err"+err);
    });
  }

  render() {
    return(
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{flex: 1}}
        keyboardVerticalOffset={METRICS.heightHeader}>
        <View style={ style.container }>
          <ScrollView>  
            <Text style={[style.textRegular14WhiteBold,{textAlign: 'center'}]}>
              Se envió el Código de Confirmación a tu email.
            </Text>
            <View style={style.lineWhite}></View>
            <Text style={style.textRegular16White}>
              Ingresá tu email
            </Text>
            <TextInput
              label="Email"
              value= { this.state.confirmationEmail }
              onChangeText={ (value) => this.setState({ confirmationEmail: value }) }
              placeholder="email"
               style={ style.textBox }
               disabled={ true }
            />
            <Text style={style.textRegular16White}>
              Ingresá el Código de Confirmación
            </Text>
            <TextInput
              label="Codigo de confirmación"
              onChangeText={ (value) => this.setState({ confirmationCode: value }) }
              placeholder="xxxxxx"
              style={ style.textBox }
              keyboardType='numeric'
            />
            <View style={style.lineWhite}></View>
          </ScrollView>
        </View>
        <Button
          title='VERIFICAR CUENTA'
          testID={'submitConfirmation'}
          onPress={ this.handleConfirmationCode }
          buttonStyle={ style.buttonVerify }
          titleStyle={ style.textRegular14WhiteBold }
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withNavigation(Confirmation);
