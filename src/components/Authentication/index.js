import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonGroup } from "react-native-elements";
import { Auth } from 'aws-amplify';
import {YellowBox} from 'react-native';
import Signup from './Signup';
import Signin from './Signin';

// import store from '../store';

class Authentication extends React.Component {

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

    renderSignUpSignIn = () => {
      if (this.state.selectedIndex === 0) {
        return (
          <View>
            <Signup/>
          </View>
        );
      } else {
        return (
          <View>
            <Signin/>
          </View>
        );
      }
    }

    render() {
      return(
        <View style={styles.container}>
          <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={this.state.selectedIndex}
              buttons={ this.buttons }
          />
          {this.renderSignUpSignIn()}
       </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default Authentication;
