import producer from 'immer';
import {
  SET_JWT_TOKEN,
  USER_SIGNED_UP,
} from './constants';

const initialState = {
  jwtToken: '',
  dataRegistration: '',
};

function setJwtToken({ draftState, jwtToken }) {
  draftState.jwtToken = jwtToken;
  return draftState;
}

function setRegistration({ draftState, registration }) {
  draftState.dataRegistration = registration;
  return draftState;
}

export default (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_JWT_TOKEN:
        return setJwtToken({ draftState, jwtToken: action.jwtToken });
      case USER_SIGNED_UP:
        return setRegistration({ draftState, registration: action.registration });
      default:
        return draftState;
    }
  });
};
