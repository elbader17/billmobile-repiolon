import React from 'react';
import { shallow } from 'enzyme';
import TaxConfiguration from './Component';

jest.mock('../../../constants/metrics', () => ({ METRICS: { heightHeader: {} } }));

const promise = Promise.resolve(0);
const updateFiscalIdentityMock = jest.fn(() => promise);

test('render correctly component TaxConfiguration', () => {
  const component = shallow(<TaxConfiguration />)
  expect(component).toMatchSnapshot();
});

test('call the createItem function with param product', () => {
  const component = shallow(<TaxConfiguration updateFiscalIdentity={updateFiscalIdentityMock}/>);
  const button = component.findWhere(node => node.prop('testID') === 'ready');
  button.simulate('press');
  expect(updateFiscalIdentityMock).toBeCalled();
});

describe('check disabled button ready', () => {
  test('button disabled at startup', () => {
    const component = shallow(<TaxConfiguration />);
    const button = component.findWhere(node => node.prop('testID') === 'ready');
    expect(button.props().disabled).toBe(true);
  });

  test('LISTO button enabled with the correct data', () => {
    const component = shallow(<TaxConfiguration />);
    component.setState({name:'Martin', cuit:'20363095721'});
    const button = component.findWhere(node => node.prop('testID') === 'ready');
    expect(button.props().disabled).toBe(false);
  });

    /*
    test('LISTO button disabled with name empty', () => {
      const component = shallow(<TaxConfiguration />);
      component.setState({name:'', cuit:'20363095721'});
      const button = component.findWhere(node => node.prop('testID') === 'ready');
      expect(button.props().disabled).toBe(false);
    });
    */

  test('LISTO button disabled with cuit invalid', () => {
    const component = shallow(<TaxConfiguration />);
    component.setState({name:'Martin', cuit:'0363095721'});
    const button = component.findWhere(node => node.prop('testID') === 'ready');
    expect(button.props().disabled).toBe(true);
  });
});

test('check state loading', () => {
  const component = shallow(<TaxConfiguration updateFiscalIdentity={updateFiscalIdentityMock} />);
  expect(component.instance().state.loading).toBe(false);
  const button = component.findWhere(node => node.prop('testID') === 'ready');
  button.simulate('press');
  expect(component.instance().state.loading).toBe(true);
});