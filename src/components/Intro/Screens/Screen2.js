import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from './style';

class Screen2 extends Component {
  render() {
    return (
      <View style={style.slide2}>
        <Text style={style.number}>2</Text>
        <Text style={style.textTittle}>Hacemos práctica la facturación</Text>
        <Text style={style.textDescription}>No tendrás que cargar la misma información 
        dos veces. Nuestro sistema guarda y ayuda a hacer más ágil tu facturación.</Text>
      </View>
    );
  }
}

export default Screen2;