import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import style from './style';

class Screen2 extends Component {
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={style.silde}>
          <Text style={style.number}>2</Text>
          <Text style={style.textTittle}>Hacemos práctica la facturación</Text>
          <Text style={style.textDescription}>No tendrás que cargar la misma información 
          dos veces. Nuestro sistema guarda y ayuda a hacer más ágil tu facturación.</Text>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Screen2;