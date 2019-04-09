import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StatusBar} from 'react-native';
import { Header } from 'react-navigation';

 
export default class VerticalStackLayout extends Component {
  render() {
    return (
        <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={{marginTop: 10}}>
            <Text>Martin Daniotti</Text>
          </View>
          <View style={styles.box}>
            <Button title="Learn More" />
          </View>
        </View>
        </KeyboardAwareScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: hp('100%')-(StatusBar.currentHeight)-(Header.HEIGHT),
    //width: wp('100%'),
    //flexDirection: 'column',
    //justifyContent: 'space-between'
  },
  box: {
    position: 'absolute',
    width: '50%',
    bottom: 0,
  },
});