import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Alert } from 'react-native';
import Button from 'react-native-button'; //https://www.npmjs.com/package/react-native-button

class Screen3 extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    return (
      <View style={styles.slide3}>
        <Text style={styles.number}>3</Text>
        <Text style={styles.textTittle}>Información segura</Text>
        <Text style={styles.textDescription}>Nuestra política de privacidad es simple: No 
        compartimos ninguna información personal o impositiva tuya.</Text>
        <Button 
          onPress={this._onPressButton} 
          style={styles.styleButton} 
          containerStyle={positionButtonEnd}
          testID={'ready'}
        >
        Listo
        </Button>
      </View>
    );
  }
}

//Currently most used resolution 360x640px 
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;

var positionButtonEnd = { top: 190, justifyContent: 'center'};
const blue = '#3687d1';
const white = '#fff';

const styles = StyleSheet.create({
  wrapper: {},
  number: {
    color: white,
    fontFamily: 'Lato-Regular',
    fontSize: 80,
    lineHeight: 90,
    position: 'absolute',
    bottom: 422
  },
  slide3: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blue
  },
  textTittle: {
    position: 'absolute',
    width: 289,
    height: 33,
    top: 287,
    fontFamily: 'Lato-Semibold',
    lineHeight: 32,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: white
  },
  textDescription: {
    position: 'absolute',
    width: 289,
    height: 66,
    top: 332,
    fontFamily: 'Lato-Regular',
    lineHeight: 21,
    fontSize: 14,
    alignItems: 'center',
    textAlign: 'center',
    color: white
  },
  styleButton: {
    width: 247, 
    height: 40, 
    padding: 10, 
    borderRadius: 2, 
    borderWidth: 1, 
    borderColor: white, 
    color: white,
    textAlign: 'center',
    fontFamily: 'Lato-Semibold', 
    fontSize: 14, 
  }
});

export default Screen3;
  