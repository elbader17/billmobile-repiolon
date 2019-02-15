//Component that renders the introduction of the application
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'; //https://github.com/leecade/react-native-swiper
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';

class Intro extends Component {
  render() {
    return (
      //Configuration of component properties
      <Swiper
        showsButtons
        loop={false} 
        dotColor={gray} 
        style={styles.wrapper} 
        activeDotColor={white} 
        buttonWrapperStyle = {positionButtonNext}
        prevButton = {<Text style={styles.prev}></Text>} 
        nextButton = {<Text style={styles.styleButton}>Siguiente</Text>} 
      >
        <Screen1 />
        <Screen2 /> 
        <Screen3 /> 
      </Swiper>
    );
  }
}

var positionButtonNext = { top: 202, justifyContent: 'center'};
const white = '#fff';
const gray = '#C4C4C4';

const styles = StyleSheet.create({
  wrapper: {},
  styleButton: {
    width: 247, 
    height: 40, 
    padding: 10, 
    borderRadius: 2, 
    borderWidth: 1, 
    borderColor: white, 
    color: white,
    textAlign: 'center',
    fontFamily: 'Lato-Semibold', 
    fontSize: 14, 
  },
  prev: {}
});

export default Intro;