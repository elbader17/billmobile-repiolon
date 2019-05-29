import * as actions from '../actions';
import { 
  LIST_INVOICE,
  GET_INVOICE,
  CREATE_INVOICE,
  UPDATE_INVOICE
} from '../constants';

describe('test actions.createInvoice', () => {
  const invoiceDate = new Date();
  const voucherType = [{ label: 'FACTURA-C', value: 'fc' }];
  let store;
  const initiaState = {
    authentication: {jwtToken: ''}
  };

  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(actions.createInvoice(invoiceDate, voucherType))
  });

  it('the action.type should be CREATE_INVOICE', () => {
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(CREATE_INVOICE);
  });

  it('the action.invoice should be {}', () => {
    const actions = store.getActions();
    expect(actions[0].invoice).toEqual({})
  });
});

describe('test actions.updateInvoice', () => {
  const invoiceDate = new Date();
  const voucherType = [{ label: 'FACTURA-C', value: 'fc' }];
  let store;
  const initiaState = {
    authentication: {jwtToken: ''},
    invoices: {currentInvoice: {id: '123'}}
  };
  
  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(actions.updateInvoice(invoiceDate, voucherType))
  });
  
  it('the action.type should be UPDATE_INVOICE', () => {
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(UPDATE_INVOICE);
  });
  
  it('the action.invoice should be {}', () => {
    const actions = store.getActions();
    expect(actions[0].invoice).toEqual({})
  });
});

describe('test actions.listInvoice', () => {
  const invoiceDate = new Date();
  const voucherType = [{ label: 'FACTURA-C', value: 'fc' }];
  let store;
  const initiaState = {
    authentication: {jwtToken: ''},
  };
    
  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(actions.listInvoice(invoiceDate, voucherType))
  });
    
  it('the action.type should be LIST_INVOICE', () => {
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(LIST_INVOICE);
  });
    
  it('the action.invoices should be {}', () => {
    const actions = store.getActions();
    expect(actions[0].invoices).toEqual([])
  });
});

describe('test actions.getInvoice', () => {
    let store;
    const initiaState = {
      authentication: {jwtToken: ''},
      invoices: {currentInvoice: {id: '123'}}
    };
      
    beforeEach(async () => {
      store = mockStore(initiaState);
      await store.dispatch(actions.getInvoice('123'))
    });
      
    it('the action.type should be GET_INVOICE', () => {
      const actions = store.getActions();
      expect(actions.length).toEqual(1);
      expect(actions[0].type).toEqual(GET_INVOICE);
    });
      
    it('the action.id should be {}', () => {
      const actions = store.getActions();
      expect(actions[0].invoice).toEqual({})
    });
  });