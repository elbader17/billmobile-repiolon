import React from 'react';
import { Alert } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Screen3 from './Screen3';

describe('Rendering Component Screen3', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Screen3 />).toJSON();
    expect(component).toMatchSnapshot();
  });
})

describe('Screen3 Button', () => {
  it('Screen3', () => {
    const clickFn = jest.fn();
    const { alert } = Alert;
    Alert.alert = clickFn;
    const wrapper = shallow(<Screen3 />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'ready');
    button.simulate('press');
    Alert.alert = alert;
    expect(clickFn).toHaveBeenCalled();
  })
});
