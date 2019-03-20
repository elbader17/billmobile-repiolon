/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import producer from 'immer';
import {
  SET_PARAMS,
} from './constants';

const initialState = {
  name: '',
  cuit: '',
  keyfiscal: '',
};

function setParams({ draftState, name, cuit, keyfiscal }) {
  draftState.name = name;
  draftState.cuit = cuit;
  draftState.keyfiscal = keyfiscal;
  return draftState;
}

export default userserviceReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_PARAMS:
        return setParams({
          draftState,
          name: action.name,
          cuit: action.cuit,
          keyfiscal: action.keyfiscal,
        });
      default:
        return draftState;
    }
  });
};
