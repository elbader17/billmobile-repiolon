import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './Component';

test('render correctly component SigUp', () => {
  const component = shallow(<SignUp />);
  expect(component).toMatchSnapshot();
});

describe('Rendering Component and call handeleSigUp', () => {
  it('call the handleSignUp', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<SignUp  signUp={clickFn} />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignUp');
    button.simulate('press');
    expect(clickFn).toBeCalled();
  })
});

describe('Test to validate data of form ',() => {
  it('Test Password with atributes disabled true, initial state', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<SignUp signUp={clickFn} />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toEqual(true);
  
  })
  it('Test Password with atributes disabled true', () => {
   const wrapper = shallow(<SignUp />);
    wrapper.setState({ password: 'agustin.com' });
    wrapper.setState({ email: 'agus' });
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toEqual(true);
  })
  it('Test Password with atributes disabled false', () => {
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ email: 'agustin@gmail.com' });
    wrapper.setState({ password: '@Am1234-' });
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toEqual(false);
   })
});