import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

class DrawerScreen extends Component {

  state = {
    maxValue: '',
    minValue: '',
  };

  render() {
    return (
        <View>
          <Text>Price:</Text>
        </View>  
    );
  }
}

export default DrawerScreen;