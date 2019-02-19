import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Input, Button } from "react-native-elements";
import PasswordInputText from 'react-native-hide-show-password-input';
import Confirmation from '../Confirmation';

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
          validateData: true,
          validEmail: true,
          validPass: true,
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

    isEmail = (email) => {
        var re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        var bool = re.test(String(email).toLowerCase());
        this.state.validEmail = !bool;
        this.state.validateData = !bool || this.state.validPass;
        return bool;
    }

    isPasswordCoorrect = (password) => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var bool = strongRegex.test(password);
        this.state.validPass = !bool;
        this.state.validateData = !bool || this.state.validEmail;
        return (bool);
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
                    valid={this.isEmail(this.state.email)}
                    returnKeyType='next'
                />
            
                <PasswordInputText
                    label="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={ this.setPassword }
                    placeholder="Aa@-1234"
                    valid={this.isPasswordCoorrect(this.state.password)}
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
                    title='Submit'
                    disabled={this.state.validateData}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SignUp;