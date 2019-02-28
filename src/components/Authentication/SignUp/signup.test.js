import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './Component';
 

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
describe('Test to validate data of form ',() => {
  it('Test Password with atributes disabled true', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<SignUp signUp={clickFn} />);
    const button = wrapper.findWhere(node => node.prop('id') === 'submitSignUp');
    expect(button.props().disabled).toEqual(true);
  
  })
  it('Test Password with atributes disabled true', () => {
   const wrapper = shallow(<SignUp />);
    const inputEmail = wrapper.findWhere(node => node.prop('label') === 'Email');
    const inputPassword = wrapper.findWhere(node => node.prop('label') === 'Password');
    inputEmail.simulate('change', { value: { value: 'Changed' } });
    inputPassword.simulate('change', { value: { value: 'Changed' } });
   
    const button = wrapper.findWhere(node => node.prop('id') === 'submitSignUp');
    expect(button.props().disabled).toEqual(true);
  })
  it('Test Password with atributes disabled false', () => {
    const wrapper = shallow(<SignUp />);
    const inputEmail = wrapper.findWhere(node => node.prop('label') === 'Email');
    const inputPassword = wrapper.findWhere(node => node.prop('label') === 'Password');
    inputEmail.simulate('change', { value: { value: 'changed@abc.com' } });
    inputPassword.simulate('change', { value: { value: '@Am1234-' } });
    const button = wrapper.findWhere(node => node.prop('id') === 'submitSignUp');
    expect(inputEmail.props()).toEqual(false);
   })
  
});