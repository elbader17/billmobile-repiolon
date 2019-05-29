import * as actions from '../actions';
import { 
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM
 } from '../constants';

describe('test actions.createInvoiceItem', () => {
  describe('invoice created', () => {
    const name = 'name';
    const category = 'category';
    const price = '123';

    const initiaState = {
      invoices: {currentInvoice: {id: '123'}},
      authentication: {jwtToken: ''}
    };
    let store;

    beforeEach(async () => {
      store = mockStore(initiaState);
      await store.dispatch(actions.createInvoiceItem(name, category, price))
    });

    it('the first action.type should be CREATE_INVOICE_ITEM', () => {
      const actions = store.getActions();
      expect(actions.length).toEqual(2);
      expect(actions[0].type).toEqual(CREATE_INVOICE_ITEM);
    });

    it('the second action.type should be GET_INVOICE', () => {
      const actions = store.getActions();
      expect(actions.length).toEqual(2);
      expect(actions[1].type).toEqual('GET_INVOICE');
    });

    it('the first action.invoiceItem should be {}', () => {
      const actions = store.getActions();
      expect(actions[0].invoiceItem).toEqual({})
    });

    it('the second action.invoice should be {}', () => {
      const actions = store.getActions();
      expect(actions[1].invoice).toEqual({})
    });

  });

  describe('invoice not created', () => {
    const name = 'name';
    const category = 'category';
    const price = '123';

    const initiaState = {
      invoices: {currentInvoice: {id: null}},
      authentication: {jwtToken: ''}
    };
    let store;

    beforeEach(async () => {
        store = mockStore(initiaState);
        await store.dispatch(actions.createInvoiceItem(name, category, price))
      });

    it('the number of actions executed should be 3', () => {
      const actions = store.getActions();
      expect(actions.length).toEqual(3);
    });
    
    it('the first action.type should be CREATE_INVOICE ', () => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual('CREATE_INVOICE');
    });

    it('the second action.type should be CREATE_INVOICE_ITEM ', () => {
      const actions = store.getActions();
      expect(actions[1].type).toEqual('CREATE_INVOICE_ITEM');
    });

    it('the third action.type should be GET_INVOICE ', () => {
      const actions = store.getActions();
      expect(actions[2].type).toEqual('GET_INVOICE');
    });

    it('the first action.invoice should be {} ', () => {
      const actions = store.getActions();
      expect(actions[0].invoice).toEqual({});
    });

    it('the second action.invoiceItem should be {}', () => {
      const actions = store.getActions();
      expect(actions[1].invoiceItem).toEqual({});
    });

    it('the third action.invoice should be {}', () => {
      const actions = store.getActions();
      expect(actions[2].invoice).toEqual({});
    });
    
  });
});

describe('test actions.updateInvoiceItem', () => {   
  const id = '012';
  const values = {};
  const initiaState = {
    invoices: {currentInvoice: {id: '123'}},
    authentication: {jwtToken: ''}
  };
  let store;
  
  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(actions.updateInvoiceItem(id, values))
  });
  
  it('the action.type should be UPDATE_INVOICE_ITEM', () => {
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(UPDATE_INVOICE_ITEM);
  });

  it('the action.invoiceItem should be {}', () => {
    const actions = store.getActions();
    expect(actions[0].invoiceItem).toEqual({});
  });
});