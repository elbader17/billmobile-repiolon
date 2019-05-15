import React from 'react';
import { shallow } from 'enzyme';
import Authentication from './index';

it('renders correctly component Authentication', () => {
  const component = shallow(<Authentication />);
  expect(component).toMatchSnapshot();
})

test('Registrar button sets the status of selectSignUp to true', () => {
  const component = shallow(<Authentication />);
  const button = component.findWhere(node => node.prop('testID') === 'register');
  button.simulate('press');
  expect(component.state().selectedSignUp).toEqual(true);
});

test('Iniciar Sesion button sets the status of selectSignUp to false', () => {
  const component = shallow(<Authentication />);
  const button = component.findWhere(node => node.prop('testID') === 'signin');
  button.simulate('press');
  expect(component.state().selectedSignUp).toEqual(false);
});