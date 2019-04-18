/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import producer from 'immer';
import {
  SET_MY_FISCAL_IDENTITY,
} from './constants';

const initialState = {
  name: '',
  cuit: '',
  completed: false,
};

function setMyFiscalIdentity({ draftState, name, cuit }) {
  draftState.name = name;
  draftState.cuit = cuit;
  draftState.completed = name != null && cuit != null;
  return draftState;
}

export default userserviceReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_MY_FISCAL_IDENTITY:
        return setMyFiscalIdentity({
          draftState,
          name: action.name,
          cuit: action.cuit,
        });
      default:
        return draftState;
    }
  });
};
