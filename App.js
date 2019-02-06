/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Amplify from 'aws-amplify';
import aws_exports from './src/aws-exports';
import Home from'./src/login/Home';

Amplify.configure(aws_exports);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to React Native </Text>
        <Home/>
     
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
