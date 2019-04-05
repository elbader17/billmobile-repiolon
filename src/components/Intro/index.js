//Component that renders the introduction of the application
import React, { Component } from 'react';
import { Text, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper'; //https://github.com/leecade/react-native-swiper
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import style from './Screens/style';
import {COLORS} from '../../constants/colors';

class Intro extends Component {
  render() {
    return ( 
      <Swiper
        showsButtons
        loop={false} 
        dotColor={COLORS.gray} 
        style={style.wrapper} 
        activeDotColor={COLORS.white} 
        prevButton = {<Text style={style.prev}></Text>} 
        nextButton = {<Text style={style.styleButtonNext}>Siguiente</Text>} 
        buttonWrapperStyle = {style.positionButtonNext}
      >
        <Screen1 />
        <Screen2 /> 
        <Screen3 /> 
      </Swiper>
    );
  }
}

export default Intro;