import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './Component';
import { Button } from 'react-native-elements';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
  const tree = shallow(<SignUp />);
  expect(tree).toMatchSnapshot();
});
describe('Rendering Component and call  handeleSigUp', () => {
  it('call the handleSignUp', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<SignUp  signUp={clickFn} />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignUp');
    button.simulate('press');
    expect(clickFn).toBeCalled();
  });
});

