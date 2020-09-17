import * as action from '../actions';
import { SET_MY_FISCAL_IDENTITY } from '../constants';

let store;
let actions;
const initiaState = {
  authentication: {jwtToken: ''}
};

describe('test action getFiscalIdentity', () => {
  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(action.getFiscalIdentity());
    actions = store.getActions();
  });
      
  it('number of actions dispatched', () => {
    expect(actions.length).toEqual(1);  
  })

  it('the action.type should be SET_MY_FISCAL_IDENTITY', () => {
    expect(actions[0].type).toEqual(SET_MY_FISCAL_IDENTITY);
  });

  it('the action.payload should be {name: martin, cuit: 20... }', () => {
    expect(actions[0].name).toEqual('martin');
    expect(actions[0].cuit).toEqual('20363095721');
  });

});

describe('test action updateFiscalIdentity', () => {
  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(action.updateFiscalIdentity('martin','20363095721'));
    actions = store.getActions();
  });
  
  it('number of actions dispatched', () => {
    expect(actions.length).toEqual(1);  
  })
  
  it('the action.type should be SET_MY_FISCAL_IDENTITY', () => {
    expect(actions[0].type).toEqual(SET_MY_FISCAL_IDENTITY);
  });
  
  it('the action.payload should be {name: martin, cuit: 20... }', () => {
    expect(actions[0].name).toEqual('martin');
    expect(actions[0].cuit).toEqual('20363095721');
  });
    
});

//Chequear los return Promise de get y put (analizar bien test action updateFiscalIdentity)