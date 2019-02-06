import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify from 'aws-amplify';
import aws_exports from './src/aws-exports';
import Authentication from'./src/components/Authentication';

Amplify.configure(aws_exports);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to React Native </Text>
        <Authentication />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
