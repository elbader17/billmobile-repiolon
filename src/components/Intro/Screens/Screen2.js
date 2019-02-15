import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.slide2}>
        <Text style={styles.number}>2</Text>
        <Text style={styles.textTittle}>Hacemos práctica la facturación</Text>
        <Text style={styles.textDescription}>No tendrás que cargar la misma información 
        dos veces. Nuestro sistema guarda y ayuda a hacer más ágil tu facturación.</Text>
      </View>
    );
  }
}

//Currently most used resolution 360x640px 
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;

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
  slide2: {
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
  }
});

export default Screen2;