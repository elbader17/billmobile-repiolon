import * as actions from '../action';
import { 
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  LIST_CUSTOMERS,
} from '../constant';

describe('test actions.createCustomer', () => {
  const name = 'name';
  const identification = '20363095721';
  const category = 'category';
  let store;
  const initiaState = {
    authentication: {jwtToken: ''}
  };

  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(actions.createCustomer({name, identification, category}))
  });

  it('the action.type should be CREATE_CUSTOMER', () => {
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(CREATE_CUSTOMER);
  });
  //Corregir response
  it('the action.customer should be {}', () => {
    const actions = store.getActions();
    expect(actions[0].customer).toEqual({});
  });
});

/*
COMPLETAR AL ESTAR FUNCIONANDO
*/