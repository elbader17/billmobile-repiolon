import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import Authentication from '../components/Authentication';
import store from '../store';
import Intro from './Intro/Intro';
import styles from './styles';
Amplify.configure(aws_exports);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Authentication />
        </View>
      </Provider>
    );
  }
}

