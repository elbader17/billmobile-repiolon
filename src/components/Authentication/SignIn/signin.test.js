import React from 'react';
import { shallow } from 'enzyme';
import SignIn  from './Component';

const promise = Promise.resolve(0);
const signInMock = jest.fn(() => promise);

test('render correctly component SignIn', () => {
  const component = shallow(<SignIn />);
  expect(component).toMatchSnapshot();
});

test('call the handleSignIn function', () => {
  const component = shallow(<SignIn signIn={signInMock} />);
  const button = component.findWhere(node => node.prop('testID') === 'submitSignIn');
  button.simulate('press');
  expect(signInMock).toBeCalled();
});

/* FALLA POR CODIGO HARDCODEADO (CAMBIAR)
test('initial state with the correct values', () => {
  const initialState = {
    email: '',
    password: '',
    hidePassword: true,
    loading: false
  };
  const component = shallow(<SignIn />);
  const state = component.instance().state;
  expect(state).toEqual(initialState);
});
*/

describe('button INICIAR SESIÓN', () => {
  test('button initially disabled', () => {
    const component = shallow(<SignIn signIn={signInMock} />);
    const button = component.findWhere(node => node.prop('testID') === 'submitSignIn');
    button.simulate('press');
    expect(button.props().disabled).toBe(true);
  });
    
  test('button enabled with the correct data', () => {
    const component = shallow(<SignIn signIn={signInMock} />);
    component.setState({ 
      email: 'martin@gmail.com',
      password: '@Martin55',
     });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignIn');
    expect(button.props().disabled).toBe(false);
  });
    
  test('button disabled with email incorrect', () => {
    const component = shallow(<SignIn signIn={signInMock} />);
    component.setState({ 
      email: 'martingmail.com',
      password: '@Martin55',
    });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignIn');
    expect(button.props().disabled).toBe(true);
  });
     
  test('button loading after press', () => {
    const component = shallow(<SignIn signIn={signInMock} />);
    const button = component.findWhere(node => node.prop('testID') === 'submitSignIn');
    button.simulate('press');
    expect(component.instance().state.loading).toBe(true);
  });

});