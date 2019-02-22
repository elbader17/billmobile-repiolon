import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SignIn from './Component';
import { handleSignIn } from './Component';

describe('Rendering Component SigIn', () => {
  test('renders correctly SignIn', () => {
    const component = renderer.create(<SignIn />).toJSON();
    expect(component).toMatchSnapshot();
  });
  
})
describe('Rendering Component and call  handeleSigIn', () => {
  it('call the handleSignIn', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<SignIn  signIn={clickFn} />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignIn');
    button.simulate('press');
    expect(clickFn).toBeCalled();
  });
});



