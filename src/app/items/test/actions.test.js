import * as actions from '../actions';
import { 
  CREATE_ITEM,
  UPDATE_ITEM,
  LIST_ITEMS
} from '../constants';

describe('test actions.createItem', () => {
  const category = 'category';
  const name = 'name';
  const price = 1;
  let store;
  const initiaState = {
    authentication: {jwtToken: ''}
  };

  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(actions.createItem(category, name, price))
  });

  it('the action.type should be CREATE_ITEM', () => {
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(CREATE_ITEM);
  });

  it('the action.payload should be {category:categoty, name:name, price: 1}', () => {
    const actions = store.getActions();
    expect(actions[0].category).toEqual(category);
    expect(actions[0].name).toEqual(name);
    expect(actions[0].price).toEqual(price);
  });
});

describe('test actions.updateItem', () => {
  const name = 'name';
  const price = 1;
  const id = 123;
  let store;
  const initiaState = {
    authentication: {jwtToken: ''}
  };
  
  beforeEach(async () => {
    store = mockStore(initiaState);
    await store.dispatch(actions.updateItem(id, name, price))
  });
  
  it('the action.type should be UPDATE_ITEM', () => {
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(UPDATE_ITEM);
  });

  it('the action.payload should be {id:123, name:name, price: 1}', () => {
    const actions = store.getActions();
    expect(actions[0].id).toEqual(id);
    expect(actions[0].name).toEqual(name);
    expect(actions[0].price).toEqual(price);
  });
});