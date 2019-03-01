import React from 'react';
import { View } from 'react-native';
import { Input, Button } from "react-native-elements";

const EMAIL_REGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 

class SignIn extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        name:'',
        confirmPassword: '',
      };
    }

    handleSignIn = () => {
      const { email, password } = this.state;
      const { signIn } = this.props;
      signIn(email, password);
            
    }

    validateData = () => {
      const isValidPassword = PASSWORD_REGEXP.test(this.state.password);
      const isValidEmail = EMAIL_REGEXP.test(String(this.state.email).toLowerCase());
      return (isValidPassword && isValidEmail);
    }

    setEmail = (value) => this.setState({ email: value })
    setPassword = (value) => this.setState({ password: value })

    render() {
      return(
          <View>
            <Input
              value={this.state.email}
              label="Email"
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={this.setEmail}
              placeholder="my@email.com"
            />
            <Input
              value={this.state.password}
              label="Password"
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={this.setPassword}
              placeholder="p@ssw0rd123"
              secureTextEntry
            />
            <Button
              testID={'submitSignIn'}
              id='submitSignIn'
              title='Submit'
              disabled={!this.validateData()}
              onPress={ this.handleSignIn }
              
            />
        </View>
      )
    }
}

export default SignIn;
