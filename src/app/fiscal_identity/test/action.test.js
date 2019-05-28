import * as actions from '../actions';
import { ADD_FISCAL_IDENTIY_TO_INVOICE } from '../constants';

describe('test actions.addFiscalIdentityToInvoice', () => {
  describe('invoice created', () => {
    const name = 'name';
    const identification = 'cuit';
    const id = 'id_invoice';

    const initiaState = {
      invoices: {currentInvoice: {id: '1234'}},
      authentication: {jwtToken: ''}
    };
    let store;

    beforeEach(async () => {
      store = mockStore(initiaState);
      await store.dispatch(actions.addFiscalIdentityToInvoice(name, identification, id))
    });

    it('the action.type should be ADD_FISCAL_IDENTIY_TO_INVOICE', () => {
      const actions = store.getActions();
      expect(actions.length).toEqual(1);
      expect(actions[0].type).toEqual(ADD_FISCAL_IDENTIY_TO_INVOICE);
    });

    it('the action.fiscalIdentity should be {}', () => {
      const actions = store.getActions();
      expect(actions.length).toEqual(1);
      expect(actions[0].fiscalIdentity).toEqual({})
    });

  });

  describe('invoice not created', () => {
    const name = 'name';
    const identification = 'cuit';
    const id = 'id_invoice';

    const initiaState = {
      invoices: {currentInvoice: {id: null}},
      authentication: {jwtToken: ''}
    };
    let store;

    beforeEach(async () => {
      store = mockStore(initiaState);
      await store.dispatch(actions.addFiscalIdentityToInvoice(name, identification, id))
    });

    it('the number of actions executed should be 2', () => {
      const actions = store.getActions();
      expect(actions.length).toEqual(2);
    });
    
    it('the first action.type should be CREATE_INVOICE ', () => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual('CREATE_INVOICE');
    });

    it('the second action.type should be ADD_FISCAL_IDENTIY_TO_INVOICE ', () => {
      const actions = store.getActions();
      expect(actions[1].type).toEqual('ADD_FISCAL_IDENTIY_TO_INVOICE');
    });

    it('the first action.invoice should be {} ', () => {
      const actions = store.getActions();
      expect(actions[0].invoice).toEqual({});
    });

    it('the second action.fiscalIdentity should be {}', () => {
      const actions = store.getActions();
      expect(actions[1].fiscalIdentity).toEqual({});
    });
    
  });
});