import React from 'react';
import { shallow, mount } from 'enzyme';
import Invoice from './Component';
import InvoiceCustomer from './InvoiceCustomer';

jest.mock('../../constants/metrics', () => ({ METRICS: { heightHeader: {} } }));
jest.mock('../../constants/invoice', () => ({ VOUCHER_TYPES: [{label:''}]  }));
jest.mock('../../utils/date', () => ({ presentInvoiceDate: () => {} }));
jest.mock('react-native-modal-datetime-picker')

const fnMock = jest.fn();

const props = {
  fiscalIdentity: {
    category: '',
    identification: '',
    name: ''
  },
  items: [],
  navigation:{navigate: fnMock},
}

test('render correctly component Invoice', () => {
  const component =  shallow(<Invoice {...props}/>);
  expect(component).toMatchSnapshot();
});

test('call the navigateToBeInvoice function', () => {
  const component = shallow(<Invoice {...props}/>);
  const button = component.findWhere(node => node.prop('testID') === 'continue');
  button.simulate('press');
  expect(fnMock).toBeCalled();
});

describe('test add final consumer', () => {
  test('check initial state cf is true', () => {
    const component = shallow(<Invoice {...props}/>);
    expect(component.instance().state.cf).toBe(false);
  });

  test('CONSUMER FINAL button set this state to true', () => {
    const component = shallow(<Invoice {...props}/>);
    const button = component.findWhere(node => node.prop('testID') === 'cf');
    button.simulate('press');
    expect(component.instance().state.cf).toBe(true);
  });

  test('CANCEL button set state cf to false', () => {
    const component = shallow(<Invoice {...props}/>);
    const button = component.findWhere(node => node.prop('testID') === 'cf');
    button.simulate('press');
    expect(component.instance().state.cf).toBe(true);
    const buttonCancel = component.findWhere(node => node.prop('testID') === 'cancel');
    buttonCancel.simulate('press');
    expect(component.instance().state.cf).toBe(false);
  });
});

test('call the navigateClient function', () => {
  const component = shallow(<Invoice {...props}/>);
  const button = component.findWhere(node => node.prop('testID') === 'addCustomer');
  button.simulate('press');
  expect(fnMock).toBeCalled();
});

test('call the navigateAddItems function', () => {
  const component = shallow(<Invoice {...props}/>);
  const button = component.findWhere(node => node.prop('testID') === 'addItems');
  button.simulate('press');
  expect(fnMock).toBeCalled();
});


