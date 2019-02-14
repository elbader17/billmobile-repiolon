import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from "react-native-elements";


class SignIn extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '@Am1234!',
        name:'',
        confirmPassword: '@Am1234!',
      };
    }

    handleSignIn = () => {
      const { email, password } = this.state;
      const { signIn } = this.props;
      if(email.length == 0 || password.length == 0){
        return {};
      }
      signIn(email, password);
      
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
              id='submitSignIn'
              title='Submit'
              onPress={ this.handleSignIn }
              testID='submitSignIn'
            />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default SignIn;
