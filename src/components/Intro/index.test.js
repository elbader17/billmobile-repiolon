import React from 'react';
import Intro from './index';
import AppIntroSlider from 'react-native-app-intro-slider';
import renderer from 'react-test-renderer';

test('render correctly component Intro', () => {
  const component = renderer.create(<Intro />);  
  expect(component.toJSON()).toMatchSnapshot();
});

test('onDone function is being called once', () => {
  const fn = jest.fn();
  const component = renderer.create(
    <AppIntroSlider 
      renderItem={()=>{}} 
      slides={{}} 
      onDone={fn} 
      bottomButton
      buttonStyle={{}}
      buttonTextStyle={{}}
      doneLabel=''
      nextLabel=''
      activeDotStyle={{}}
      dotStyle={{}}
    />
  );
  const instance = component.getInstance();
  instance.props.onDone();
  expect(fn.mock.calls.length).toBe(1);
});
