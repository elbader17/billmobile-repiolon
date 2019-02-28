import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Input, Button } from "react-native-elements";
import PasswordInputText from 'react-native-hide-show-password-input';
import Confirmation from '../Confirmation';
import styles from './styles';

const EMAIL_REGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 
class SignUp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          name:'',
          confirmPassword: '',
          confirmationEmail:'',
          selectedIndex: 0,
          
        };
      }

    handleSignUp = () => {
        const { name, email, password, confirmPassword } = this.state;
        const attributes = {
            email:email,
            name:name,
        };
        const { signUp } = this.props;
        signUp(password, email,attributes);
        this.setState({showConfirmationModal: true});
        
    }

    handleConfirmationCode = () => {
        const { confirmationEmail, confirmationCode } = this.state;
        const { confirmCode } = this.props;
        confirmCode(confirmationEmail,confirmationCode,{})
    }

   

    validateData = () => {
      const isValidPassword = PASSWORD_REGEXP.test(this.state.password);
      const isValidEmail = EMAIL_REGEXP.test(String(this.state.email).toLowerCase());
      return (isValidPassword && isValidEmail);
    }

    
    setName = (value) => this.setState({ name: value})
    setEmail = (value) => this.setState({ email: value })
    setPassword = (value) => this.setState({ password: value })
    setConfirmPassword = (value) => this.setState({ confirmPassword: value })
    
    render() {
        return(
            <View style={{margin: 20}}>
                <Input
                    label="Nombre"
                    onChangeText={ this.setName }
                    placeholder="Nombre"
                />
                <Input
                    label="Email"
                    onChangeText={this.setEmail}
                    placeholder="usuario@email.com"
                    onRef={r => { this.state.email = r }}
                    value={this.state.email}
                    editable={!this.props.fetching}
                    returnKeyType='next'
                />
            
                <PasswordInputText
                    label="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={ this.setPassword }
                    placeholder="Aa@-1234"
                    value={this.state.password}
                    secureTextEntry
                />
                
                <PasswordInputText
                    label="ConfirmPassword"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={ this.setConfirmPassword }
                    placeholder="Aa@-1234"
                    secureTextEntry
                />
                <Button
                    id='submitSignUp'
                    title='Submit'
                    value={this.state.email}
                    testID={'submitSignUp'}
                    disabled={!this.validateData()}
                    onPress={ this.handleSignUp }
                />
            
                
                <Modal visible={this.props.showConfirmationModal} >
                    <View style={styles.container} >
                        <Confirmation/>
                    </View>
                </Modal>
        </View>
        )

    }
}

export default SignUp;