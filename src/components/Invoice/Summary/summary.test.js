import React from 'react';
import { shallow } from 'enzyme';
import SummaryInvoice from './Component';

jest.mock('../../../constants/metrics', () => ({ METRICS: { heightHeader: {} } }));
jest.mock('../../../utils/date', () => ({ presentInvoiceDate: () => {} }));

const fnMock = jest.fn();

const props = {
  fiscalIdentity: {
    category: '',
    identification: '',
    name: ''
  },
  items: [],
  navigation:{navigate: fnMock}
}

test('render correctly component InvoiceSummary', () => {
  const component = shallow(<SummaryInvoice {...props}/>);
  expect(component).toMatchSnapshot();
});

test('call the navigateToInvoice function', () => {
  const component = shallow(<SummaryInvoice {...props}/>);
  const button = component.findWhere(node => node.prop('testID') === 'edit');
  button.simulate('press');
  expect(fnMock).toBeCalled();
});