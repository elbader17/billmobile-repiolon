import React from 'react';
import { StyleSheet, Text, View, Modal, Navigator} from 'react-native';
import { Input, Button, ButtonGroup } from "react-native-elements";
import { Auth } from 'aws-amplify';
import {YellowBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';


// import store from '../store';

export default class SignIn extends React.Component {

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
        const {  email, password } = this.state;
        Auth.signIn(email, password)
          // If we are successful, navigate to Home screen
        .then(data => console.error(data.signInUserSession.idToken.jwtToken))
          //.then(user => this.props.navigation.navigate('Home'))
          // On failure, display error in console
        .catch(err => console.error("erroe", err));
    }

    render() {
        return(
            <View>
            <Input
            label="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ email: value })
            }
            placeholder="my@email.com"
            />
            <Input
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ password: value })
            }
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
<script src="http://localhost:8097"></script>