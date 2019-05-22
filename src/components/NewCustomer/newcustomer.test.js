import React from 'react';
import { shallow } from 'enzyme';
import NewCustomer  from './Component';

jest.mock('../../constants/metrics', () => ({
  METRICS: {
    heightHeader: {} 
  },
}));

const promise = Promise.resolve(0);
const addFiscalIdentityMock = jest.fn(() => promise);

const setup = () => {
  const props = {
    fiscalIdentity: {
      category: '',
      identification: '',
      name: ''
    },
    addFiscalIdentity: addFiscalIdentityMock
  }
  const component = shallow(<NewCustomer {...props}/>);
  return {props, component};
};

test('render correctly component NewCustomer', () => {
  const {component} = setup();
  expect(component).toMatchSnapshot();
});

test('the property loading is false at the start', () => {
  const {component} = setup();
  expect(component.state().loading).toBe(false);
});

test('call the newCustomer function', () => {
  const {component} = setup();
  const button = component.findWhere(node => node.prop('testID') === 'buttonNewCustomer');
  button.simulate('press');
  expect(addFiscalIdentityMock).toBeCalled();
});

describe('button GUARDAR test', () => {
  
  test('button initially disabled', () => {
    const {component} = setup();
    const button = component.findWhere(node => node.prop('testID') === 'buttonNewCustomer');
    button.simulate('press');
    expect(button.props().disabled).toBe(true);
  });
      
  test('button enabled with the correct data', () => {
    const {component} = setup();
    component.setState({ 
      identification: '20363095721',
    });
    const button = component.findWhere(node => node.prop('testID') === 'buttonNewCustomer');
    expect(button.props().disabled).toBe(false);
  });
      
  test('button disabled with cuit incorrect', () => {
    const {component} = setup();
    component.setState({ 
      identification: '0363095721',
    });
    const button = component.findWhere(node => node.prop('testID') === 'buttonNewCustomer');
    expect(button.props().disabled).toBe(true);
  });
       
  test('button loading after press', () => {
    const {component} = setup();
    const button = component.findWhere(node => node.prop('testID') === 'buttonNewCustomer');
    button.simulate('press');
    expect(component.instance().state.loading).toBe(true);
  });
  
});

test('button loading after press', () => {
  const {component} = setup();
  const button = component.findWhere(node => node.prop('testID') === 'buttonNewCustomer');
  button.simulate('press');
  console.log(component.instance().state.then);
});
  