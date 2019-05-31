import userServiceReducer from '../reducer';
import { SET_MY_FISCAL_IDENTITY } from '../constants';

describe('post reducer', () => {
  it('test setMyFiscalIdentity completed', () => {
    const action = { 
      type: SET_MY_FISCAL_IDENTITY, 
      name: 'martin',
      cuit: '20363095721',
      completed: false
    };
    const expectedState = { 
      name: 'martin',
      cuit: '20363095721',
      completed: true
    };
    expect(userServiceReducer(undefined, action)).toEqual(expectedState);
  });

  it('test setMyFiscalIdentity name null', () => {
    const action = { 
      type: SET_MY_FISCAL_IDENTITY, 
      name: null,
      cuit: '20363095721',
      completed: false
    };
    const expectedState = { 
      name: null,
      cuit: '20363095721',
      completed: false
    };
    expect(userServiceReducer(undefined, action)).toEqual(expectedState);
  });

  it('test setMyFiscalIdentity cuit null', () => {
    const action = { 
      type: SET_MY_FISCAL_IDENTITY, 
      name: 'martin',
      cuit: null,
      completed: false
    };
    const expectedState = { 
      name: 'martin',
      cuit: null,
      completed: false
    };
    expect(userServiceReducer(undefined, action)).toEqual(expectedState);
  });
});