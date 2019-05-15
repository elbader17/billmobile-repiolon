import React from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SLIDES_INTRO} from '../../constants/slides_intro';
import style from './style';

class Intro extends React.Component {
  _renderItem = (item) => {
    return (
      <View style={style.silde}>
        <View style={style.box1}>
          <Text style={style.number}>{item.title}</Text>
        </View>
        <View style={style.box2}>
          <Text style={style.textTittle}>{item.text}</Text>
        </View>
        <View style={style.box3}>
          <Text style={style.textDescription}>{item.description}</Text>
        </View>
      </View>
    );
  }
  _onDone = () => {
    this.props.navigation.navigate('Authentication')
  }
  render() {
    return (    
      <AppIntroSlider 
        renderItem={this._renderItem} 
        slides={SLIDES_INTRO} 
        onDone={this._onDone} 
        bottomButton
        buttonStyle={style.button}
        buttonTextStyle={style.buttonText}
        doneLabel='Listo'
        nextLabel='Siguiente'
        activeDotStyle={style.activeDotStyle}
        dotStyle={style.dotStyle}
      />
    )
  }
}

export default Intro;