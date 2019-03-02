import * as reducers from '../reducer';
import {
  SET_JWT_TOKEN,
  SHOW_CONFIRMATION_MODAL,
  HIDE_CONFIRMATION_MODAL,
} from '../constants';

describe('Reducers', () => {
  test('Test initial ', () => {
    const action = { type: 'SET_JWT_TOKEN' };
    const initialState = {jwtToken: undefined, showConfirmationModal: false };
    expect(authenticationReducer(undefined, action)).toEqual(initialState);
  })

  it('Test set jwtToken ', () => {
    const action = { type: SET_JWT_TOKEN, jwtToken: 1 };
    const expectedState = { jwtToken: 1, showConfirmationModal: false };

    expect(authenticationReducer(undefined, action)).toEqual(expectedState);
  });

  it('Test Show confirmation modal ', () => {
    const action = { type: SHOW_CONFIRMATION_MODAL };
    const expectedState = { jwtToken: "",showConfirmationModal: true };

    expect(authenticationReducer(undefined, action)).toEqual(expectedState);
  });

  it('Test Hide confirmation modal ', () => {
    const action = { type: HIDE_CONFIRMATION_MODAL };
    const expectedState = {  jwtToken: "", showConfirmationModal: false };

    expect(authenticationReducer(undefined, action)).toEqual(expectedState);
  });

});

