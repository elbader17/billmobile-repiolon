import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from "react-native-elements";
import { signIn } from '../../../app/authentication/actions';

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
      const { dispatch } = this.props;
      dispatch(signIn(email, password));
    }

    setEmail = (value) => this.setState({ email: value })
    setPassword = (value) => this.setState({ password: value })

    render() {
      return(
          <View>
            <Input
              label="Email"
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={this.setEmail}
              placeholder="my@email.com"
            />
            <Input
              label="Password"
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={this.setPassword}
              placeholder="p@ssw0rd123"
              secureTextEntry
            />
            <Button
              title='Submit'
              onPress={ this.handleSignIn }
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
