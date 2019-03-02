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


describe('Test to validate data of form ',() => {
  it('Test Password with atributes disabled true, initial state ', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<SignIn signIn={clickFn} />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignIn');
    expect(button.props().disabled).toEqual(true);
  
  })
  it('Test Password with atributes disabled true', () => {
   const wrapper = shallow(<SignIn />);
    wrapper.setState({ password: 'mal' });
    wrapper.setState({ email: 'mal' });
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignIn');
    expect(button.props().disabled).toEqual(true);
  })
  it('Test Password with atributes disabled false', () => {
    const wrapper = shallow(<SignIn />);
    wrapper.setState({ password: '@Am1234-' });
    wrapper.setState({ email: 'a@a.com' });
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitSignIn');
    expect(button.props().disabled).toEqual(false);
   })
  
});



