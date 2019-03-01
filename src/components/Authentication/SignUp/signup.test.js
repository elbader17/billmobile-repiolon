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
    wrapper.setState({ password: 'mal' });
    wrapper.setState({ email: 'mal' });
    const button = wrapper.findWhere(node => node.prop('id') === 'submitSignUp');
    expect(button.props().disabled).toEqual(true);
  })
  it('Test Password with atributes disabled false', () => {
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ password: '@Am1234-' });
    wrapper.setState({ email: 'a@a.com' });
    const button = wrapper.findWhere(node => node.prop('id') === 'submitSignUp');
    expect(button.props().disabled).toEqual(false);
   })
  
});

