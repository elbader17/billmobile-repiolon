import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { withNavigation } from 'react-navigation';
import Button from 'react-native-button'; //https://www.npmjs.com/package/react-native-button
import style from './style';

class Screen3 extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Authentication')
  }
  render() {
    return (
      <View style={style.slide3}>
        <Text style={style.number}>3</Text>
        <Text style={style.textTittle}>Información segura</Text>
        <Text style={style.textDescription}>Nuestra política de privacidad es simple: No 
        compartimos ninguna información personal o impositiva tuya.</Text>
        <Button 
          onPress={this.handlePress} 
          style={style.styleButton} 
          containerStyle={style.positionButtonEnd}
          testID={'ready'}
        >
        Listo
        </Button>
      </View>
    );
  }
}

export default withNavigation(Screen3);
  