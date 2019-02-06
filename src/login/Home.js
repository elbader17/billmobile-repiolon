import React from 'react';
import { StyleSheet, Text, View, Modal, Navigator} from 'react-native';
import { Input, Button, ButtonGroup } from "react-native-elements";
import { Auth } from 'aws-amplify';
import {YellowBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import Signup from './Signup';
import Signin from './Signin';

// import store from '../store';

export default class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '@Am1234!',
          name:'',
          confirmPassword: '@Am1234!',
          selectedIndex: 0,
        };
    
        this.buttons = ['Sign Up', 'Sign In'];
      }
    
      updateIndex = () => {
        // If selectedIndex was 0, make it 1.  If it was 1, make it 0
        const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
        this.setState({ selectedIndex: newIndex });
      }
    handleSignUp = () => {
        //alert(JSON.stringify(this.state));
        const { name, email, password, confirmPassword } = this.state;
        YellowBox.ignoreWarnings(['Warning: ...']);
        alert(JSON.stringify(name+email+password+confirmPassword));
        // Make sure passwords match
        if (password === confirmPassword) {
          Auth.signUp({
            password:password,
            username: name,
            attributes:{
              email:email,
              name:name,
            },
            validationData: [],  //optional
          })
            // On success, show Confirmation Code Modal
            .then(() => this.setState({ modalVisible: true }))
            // On failure, display error in console
            .catch(err => console.error("erroe", err));
          
        } else {
          alert('Passwords do not match.');
        }
      }
    
    handleConfirmationCode = () => {
        const { name, confirmationCode } = this.state;
        Auth.confirmSignUp(name, confirmationCode, {})
          .then(() => {
            this.setState({ modalVisible: false });
            alert('Logueado ... ')
          })
          .catch(err => console.error("erroe", err));
    }


    render() {
        return(
            <View style={styles.container}>
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={this.state.selectedIndex}
                buttons={ this.buttons }
            />
            { this.state.selectedIndex === 0 ? (
                <View>
                    <Signup/>  
                </View>
            ) : (
                <View>
                    <Signin/>
                 </View>
            ) }
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