import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Screen1 extends Component {
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={style.silde}>
          <View style={style.centerVertical}>
            <Text style={style.number}>1</Text>
            <Text style={style.textTittle}>Facturar sin demoras</Text>
            <Text style={style.textDescription}>Como cuando lo era cuando lo hacias en papel, 
            ágil para vos y para tus clientes.</Text>
            </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Screen1;