import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { withNavigation } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'react-native-button'; //https://www.npmjs.com/package/react-native-button
import style from './style';

class Screen3 extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Authentication')
  }
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={style.silde}>
          <Text style={style.number}>3</Text>
          <Text style={style.textTittle}>Información segura</Text>
          <Text style={style.textDescription}>Nuestra política de privacidad es simple: No 
          compartimos ninguna información personal o impositiva tuya.</Text>
          <Button 
            onPress={this.handlePress} 
            style={style.buttonReady} 
            containerStyle={style.positionButtonEnd}
            testID={'ready'}
          >
          Listo
          </Button>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default withNavigation(Screen3);
  