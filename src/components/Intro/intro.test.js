import React from 'react';
import { Alert } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from 'react-native-button';
import Intro from './Intro';

describe('Rendering Component Intro', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Intro />).toJSON();
    expect(component).toMatchSnapshot();
  });
})

describe('Intro Button', () => { 
  it('button click should hide component', () => {
    const clickFn = jest.fn();
    const { alert } = Alert;
    Alert.alert = clickFn;
    const component = shallow(<Button onPress={clickFn}>Listo</Button>);
    component.simulate('press');
    Alert.alert = alert;
    expect(clickFn).toHaveBeenCalled();
  });

  it('encuentra button', () => {
    const wrapper = shallow(<Intro />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'ready');
    expect(button).toBeTruthy();
  });
  
  it('introooo', () => {
    const clickFn = jest.fn();
    const { alert } = Alert;
    Alert.alert = clickFn;
    const wrapper = shallow(<Intro />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'ready').first();
    button.dive().simulate('press');
    Alert.alert = alert;
    expect(clickFn).toHaveBeenCalled();
  })
});