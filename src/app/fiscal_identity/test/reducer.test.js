import fiscalIdentityReducer from '../reducer';
import { 
  SET_FISCAL_IDENTITY,
  ADD_FISCAL_IDENTITY,
} from '../constants';

describe('post reducer', () => {
  it('test set fiscal identity ', () => {
    const action = { 
      type: SET_FISCAL_IDENTITY, 
      name: 'martin',
      category: 'monotributo',
      identification: '20363095721' 
    };
    const expectedState = { 
      name: 'martin',
      category: 'monotributo',
      identification: '20363095721' 
    };
    expect(fiscalIdentityReducer(undefined, action)).toEqual(expectedState);
  });

  it('test add fiscal identity ', () => {
    const action = { 
      type: ADD_FISCAL_IDENTITY, 
      name: 'martin',
      category: 'monotributo',
      identification: '20363095721' 
    };
    const expectedState = { 
      name: 'martin',
      category: 'monotributo',
      identification: '20363095721' 
    };
    expect(fiscalIdentityReducer(undefined, action)).toEqual(expectedState);
  });
});