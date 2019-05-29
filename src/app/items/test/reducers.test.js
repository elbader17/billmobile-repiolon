import itemsReducer from '../reducers';
import { 
  CREATE_ITEM,
  UPDATE_ITEM,
  LIST_ITEMS
} from '../constants';
import { JestEnvironment } from '@jest/environment';

describe('post reducer', () => {
  it('test set items', () => {
    const action = { 
      type: LIST_ITEMS, 
      items: [{id: 1, name:'Pepsi', price:87}]
    };
    const expectedState = { 
      items: [{id: 1, name:'Pepsi', price:87}]
    };
    expect(itemsReducer(undefined, action)).toEqual(expectedState);
  });
/*
  it('test add items', () => {
    const action = { 
      type: CREATE_ITEM, 
      category:'1',
      name:'Fanta',
      price: 12
    };
    const initialState = [{category:'1', name:'Pepsi', price:87}];
    const expectedState = [
      {category:'1', name:'Pepsi', price:87},
      {category:'1', name:'Fanta', price:12}
    ]
    expect(itemsReducer(initialState, action)).toEqual(expectedState);
  });
*/
});