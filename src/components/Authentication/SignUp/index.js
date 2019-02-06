import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Input, Button } from "react-native-elements";
import { Auth } from 'aws-amplify';
import {YellowBox} from 'react-native';

// import store from '../store';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '@Am1234!',
          name:'',
          confirmPassword: '@Am1234!',
          selectedIndex: 0,
          modalVisible: false,
        };
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
            <View>
            <Input
            label="Name"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ name: value })
            }
            placeholder="Name"
            />
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
            <Input
            label="Confirm Password"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={
                // Set this.state.email to the value in this Input box
                (value) => this.setState({ confirmPassword: value })
            }
            placeholder="p@ssw0rd123"
            secureTextEntry
            />
            <Button
            title='Submit'
            onPress={ this.handleSignUp }
            />

            <Modal visible={this.state.modalVisible} >
                <View style={styles.container} >
                    <Input
                    label="Confirmation Code"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={
                        // Set this.state.confirmationCode to the value in this Input box
                        (value) => this.setState({ confirmationCode: value })
                    }
                    />
                    <Button
                    title='Submit'
                    onPress={ this.handleConfirmationCode }
                    />
                </View>
            </Modal>
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


export default SignUp;
