import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Input, Button } from "react-native-elements";


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
          showConfirmationModal: false,
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
        console.log("ShowConf: "+this.props.showConfirmationModal);
        
    }

    handleConfirmationCode = () => {
        const { confirmationEmail, confirmationCode } = this.state;
        const { confirmCode } = this.props;
        confirmCode(confirmationEmail,confirmationCode,{})
        console.log("ShowConf: "+this.props.showConfirmationModal);

    }

    isEmail = (email) => {
        var re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        var bool = re.test(String(email).toLowerCase());
        this.state.validEmail = !bool;
        this.state.validateData = !bool || this.state.validPass
        console.log("ShowConf: "+this.props.showConfirmationModal);
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
            <View>
                <Input
                    label="Name"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={ this.setName }
                    placeholder="Name"
                />
                <Input
                    label="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={this.setEmail}
                    placeholder="my@email.com"
                    onRef={r => { this.state.email = r }}
                    value={this.state.email}
                    editable={!this.props.fetching}
                    valid={this.isEmail(this.state.email)}
                    returnKeyType='next'
                />
            
                <Input
                    label="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={ this.setPassword }
                    placeholder="p@ssw0rd123"
                    valid={this.isPasswordCoorrect(this.state.password)}
                    secureTextEntry
                />
                <Input
                    label="ConfirmPassword"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={ this.setConfirmPassword }
                    placeholder="p@ssw0rd123"
                    secureTextEntry
                />
                <Button
                    title='Submit'
                    disabled={this.state.validateData}
                    onPress={ this.handleSignUp }
                />
            
                
                <Modal visible={this.props.showConfirmationModal} >
                    <View style={styles.container} >
                    <Input
                            label="Email"
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            onChangeText={
                                // Set this.state.confirmationCode to the value in this Input box
                                (value) => this.setState({ confirmationEmail: value })
                            }
                        />
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