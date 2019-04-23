import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class Confirmation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
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
    confirmCode(confirmationEmail,confirmationCode,{});
  }

  setConfirmPassword = (value) => this.setState({ confirmPassword: value })

  render() {
    return(
      <View state={ style.container }>
        <View style={ style.containerInputs }>
          <Text style={ style.textRegular14GrayDark }>
            Se envió el Código de Confirmacion a tu email.
          </Text>
          <View style={style.lineGray}></View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Email"
              onChangeText={ (value) => this.setState({ confirmationEmail: value }) }
              placeholder="Tu email"
              style={ style.textBox }
              disabled={ true }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              label="Codigo de confirmación"
              onChangeText={ (value) => this.setState({ confirmationCode: value }) }
              placeholder="Codigo de Confirmación"
              style={ style.textBox }
            />
          </View>
          <View style={style.lineGray}></View>
          <Button
            title='VERIFICAR'
            testID={'submitConfirmation'}
            onPress={ this.handleConfirmationCode }
            buttonStyle={ style.buttonVerify }
            titleStyle={ style.textRegular14WhiteBold }
          />
          <View style={style.lineGrayDrak}></View>
        </View>
      </View>
    )
  }
}

export default withNavigation(Confirmation);
