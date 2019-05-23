import React from 'react';
import { shallow, mount } from 'enzyme';
import InvoiceCustomer from './InvoiceCustomer';

jest.mock('../../constants/metrics', () => ({ METRICS: { heightHeader: {} } }));

test('render correctly functional component Invoice', () => {
  const fcomponent =  shallow(<InvoiceCustomer />);
  expect(fcomponent).toMatchSnapshot();
});
