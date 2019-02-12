import producer from 'immer';
import { SET_JWT_TOKEN } from './constants';

const initialState = {
  jwtToken: '',
};

function setJwtToken({state, jwtToken }){
  state.jwtToken = jwtToken;
  return state;
}

export default authenticationReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_JWT_TOKEN:
        return setJwtToken({state, jwtToken: action.payload.jwtToken });
      default:
        return draftState;
    }
  });
};

/**
 export const authenticationReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_JWT_TOKEN:
        return setJwtToken({state, jwtToken: action.payload.jwtToken });
      default:
        return draftState;
    }
  });
};
 * 
 */