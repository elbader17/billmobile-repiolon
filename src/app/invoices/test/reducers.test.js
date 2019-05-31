import invoicesReducer from '../reducers';
import { 
  LIST_INVOICE,
  GET_INVOICE,
  UPDATE_INVOICE,
  CREATE_INVOICE
} from '../constants';

import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
} from '../../invoice_items/constants';

import { ADD_FISCAL_IDENTITY_TO_INVOICE } from '../../fiscal_identity/constants';

describe('post reducer', () => {
  const invoicee = {
    attributes: {
      invoice_date: '2019/05/31',
      invoice_type: 'fc',
      total: 100
    },
    id: '001'
  }
  const expectedState = { 
    invoices: [],
    currentInvoice: {
      fiscalIdentity: { name: '', cuit: '' },
      invoiceItems: [],
      invoiceDate: new Date('2019/05/31'),
      voucherType: 'fc',
      id: '001',
      total: 100 
    } 
  };

  it('test CREATE_INVOICE - setCurrentInvoice ', () => {
    const action = { 
      type: CREATE_INVOICE, 
      invoice: invoicee
    };
    expect(invoicesReducer(undefined, action)).toEqual(expectedState);
  });

  it('test UPDATE_INVOICE - setCurrentInvoice ', () => {
    const action = { 
      type: UPDATE_INVOICE, 
      invoice: invoicee
    };
    expect(invoicesReducer(undefined, action)).toEqual(expectedState);
  });

  it('test GET_INVOICE - setCurrentInvoice ', () => {
    const action = { 
      type: GET_INVOICE, 
      invoice: invoicee
    };
    expect(invoicesReducer(undefined, action)).toEqual(expectedState);
  });

  it('test LIST_INVOICE - setInvoices', () => {
    const invoices = [{id:'invoice1'}];
    const action = { 
      type: LIST_INVOICE, 
      invoices: invoices
    };
    const expectedState = [{id:'invoice1'}];
    expect(invoicesReducer(undefined, action).invoices).toEqual(expectedState);
  });

  it('test CREATE_INVOICE_ITEM - addInvoiceItem ', () => {
    const initialState = {
      invoices: [],
      currentInvoice: { 
        fiscalIdentity: { name: 'Martin', cuit: '20363095721' },
        invoiceItems: [{ category: 'service', name: 'flete', price: '195.0', quantity: 1, id: '003' }],
        invoiceDate: new Date(),
        voucherType: 'fc',
        id: null,
        total: 0 
      }
    }
    const action = { 
      type: CREATE_INVOICE_ITEM, 
      invoiceItem: {
        attributes: {category: "product", name: "estufa", price: "895.0", quantity: 1, invoice_id: 72},
        id: '002'
      }
    };
    const expectedState = {
      invoices: [],
      currentInvoice: { 
        fiscalIdentity: { name: 'Martin', cuit: '20363095721' },
        invoiceItems: [
          { category: 'service', name: 'flete', price: '195.0', quantity: 1, id: '003' },
          { category: 'product', name: 'estufa', price: '895.0', quantity: 1, id: '002'}
        ],
        invoiceDate: new Date(),
        voucherType: 'fc',
        id: null,
        total: 0 
      }
    }
    expect(invoicesReducer(initialState, action).currentInvoice.invoiceItems).toEqual(expectedState.currentInvoice.invoiceItems);
  });

  it('test UPDATE_INVOICE_ITEM - updateInvoiceItem ', () => {
    const initialState = {
      invoices: [],
      currentInvoice: { 
        fiscalIdentity: { name: 'Martin', cuit: '20363095721' },
        invoiceItems: [{ category: 'product', name: 'convector', price: '700.0', quantity: 2, id: '002' }],
        invoiceDate: new Date(),
        voucherType: 'fc',
        id: null,
        total: 0 
      }
    }
    const action = { 
      type: UPDATE_INVOICE_ITEM, 
      invoiceItem: {
        attributes: {category: "product", name: "convector", price: "795.0", quantity: 1, invoice_id: 72},
        id: '002'
      }
    };
    const expectedState = {
      invoices: [],
      currentInvoice: { 
        fiscalIdentity: { name: 'Martin', cuit: '20363095721' },
        invoiceItems: [
          { category: 'product', name: 'convector', price: '795.0', quantity: 1, id: '002'}
        ],
        invoiceDate: new Date(),
        voucherType: 'fc',
        id: null,
        total: 0 
      }
    }
    expect(invoicesReducer(initialState, action).currentInvoice.invoiceItems).toEqual(expectedState.currentInvoice.invoiceItems);
  });

  it('test ADD_FISCAL_IDENTITY_TO_INVOICE - addFiscalIdentity', () => {
    const identity = {
      attributes:  {category: "monotributo", name: "fuselly", identification: "20363095721"},
      id:'80' ,
      type: 'fiscal_identity'
    }
    const action = { 
      type: ADD_FISCAL_IDENTITY_TO_INVOICE, 
      fiscalIdentity: identity
    };
    expect(invoicesReducer(undefined, action).currentInvoice.fiscalIdentity).toEqual(identity.attributes);
  });

});