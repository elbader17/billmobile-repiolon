import React from 'react';
import { shallow } from 'enzyme';
import SignUp  from './Component';

jest.mock('../../../constants/metrics', () => ({ METRICS: { heightHeader: {} } }));

const promise = Promise.resolve(0);
const signUpMock = jest.fn(() => promise);

test('render correctly component SignUp', () => {
  const component = shallow(<SignUp />);
  expect(component).toMatchSnapshot();
});

test('call the handleSignUp function', () => {
  const component = shallow(<SignUp signUp={signUpMock} />);
  const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
  button.simulate('press');
  expect(signUpMock).toBeCalled();
});

/* FALLA - DATOS POR DEFAULT PARA NO COMPLETAR CONSTANTEMENTE (CAMBIAR)
test('initial state with the correct values', () => {
  const initialState = {
    email: '',
    password: '',
    name:'',
    confirmPassword: '',
    hidePassword: true,
    hideConfirmPassword: true,
    messagePassFormat: false,
    messageEmailFormat: false,
    messageMatchPass: false,
    loading: false
  };
  const component = shallow(<SignUp />);
  const state = component.instance().state;
  expect(state).toEqual(initialState);
});*/

describe('button CREAR CUENTA', () => {
  test('button initially disabled', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    button.simulate('press');
    expect(button.props().disabled).toBe(true);
  });
  
  test('button enabled with the correct data', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    component.setState({ 
      email: 'martin@gmail.com',
      password: '@Martin55',
      name: 'Martin',
      confirmPassword: '@Martin55'
    });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toBe(false);
  });
  
  test('button disabled with email incorrect', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    component.setState({ 
      email: 'martingmail.com',
      password: '@Martin55',
      name: 'Martin',
      confirmPassword: '@Martin55'
    });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toBe(true);
  });
  
  test('button disabled with password incorrect', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    component.setState({ 
      email: 'martin@gmail.com',
      password: '@Martin',
      name: 'Martin',
      confirmPassword: '@Martin55'
    });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toBe(true);
  });
  
  test('button disabled with confirmPassword incorrect', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    component.setState({ 
      email: 'martin@gmail.com',
      password: '@Martin55',
      name: 'Martin',
      confirmPassword: '@Martin'
    });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toBe(true);
  });
  
  test('button disabled with password and confirmPassword no match', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    component.setState({ 
      email: 'martin@gmail.com',
      password: '@Martin55',
      name: 'Martin',
      confirmPassword: '@Martin556'
    });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toBe(true);
  });
  
  test('button disabled with name empty', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    component.setState({ 
      email: 'martingmail.com',
      password: '@Martin55',
      name: '',
      confirmPassword: '@Martin55'
    });
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    expect(button.props().disabled).toBe(true);
  });
  
  test('button loading after press', () => {
    const component = shallow(<SignUp signUp={signUpMock} />);
    const button = component.findWhere(node => node.prop('testID') === 'submitSignUp');
    button.simulate('press');
    expect(component.instance().state.loading).toBe(true);
  });
  
});