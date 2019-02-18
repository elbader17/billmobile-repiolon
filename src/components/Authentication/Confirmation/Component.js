import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Input, Button } from "react-native-elements";


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          confirmPassword: '',
        };
      }


    handleConfirmationCode = () => {
        const { confirmationEmail, confirmationCode } = this.state;
        const { confirmCode } = this.props;
        confirmCode(confirmationEmail,confirmationCode,{})
    }

    setConfirmPassword = (value) => this.setState({ confirmPassword: value })

    render() {
        return(
            <View>
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
        )

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Confirmation;