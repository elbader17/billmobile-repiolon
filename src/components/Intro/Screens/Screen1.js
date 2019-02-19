import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from './style';

class Screen1 extends Component {
  render() {
    return (
      <View style={style.slide1}>
        <Text style={style.number}>1</Text>
        <Text style={style.textTittle}>Facturar sin demoras</Text>
        <Text style={style.textDescription}>Como cuando lo era cuando lo hacias en papel, 
        ágil para vos y para tus clientes.</Text> 
      </View>
    );
  }
}

export default Screen1;