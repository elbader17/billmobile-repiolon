import authenticationReducer from '../reducer';
import {
  SET_JWT_TOKEN, USER_SIGNED_UP,
} from '../constants';

describe('post reducer', () => {

  it('should return the initial state ', () => {
    const expectedState = { 
      jwtToken:'', 
      dataRegistration:'' 
    };
    expect(authenticationReducer(undefined, {})).toEqual(expectedState);
  })

  it('test set jwtToken ', () => {
    const action = { 
      type: SET_JWT_TOKEN, 
      jwtToken: 1 
    };
    const expectedState = { 
      jwtToken: 1, 
      dataRegistration:'' 
    };
    expect(authenticationReducer(undefined, action)).toEqual(expectedState);
  });

  it('test set dataRegistration ', () => {
    const action = { 
      type: USER_SIGNED_UP, 
      registration: { 
        email: 'daniotti@gmail.com', 
        password:'@Martin4'
      } 
    };
    const initialState = { 
      jwtToken: '', 
      dataRegistration: ''
    };
    const expectedState = { 
      jwtToken: '', 
      dataRegistration: { 
        email: 'daniotti@gmail.com', 
        password:'@Martin4'
      }
    };
    expect(authenticationReducer(initialState, action)).toEqual(expectedState);
  });

});