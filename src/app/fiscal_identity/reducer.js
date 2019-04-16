import producer from 'immer';
import {
  SET_FISCAL_IDENTITY,
} from './constants';

const initialState = {
  name: '',
  cuit: '',
};

function setfiscalIdentity({ draftState, name, cuit }) {
  draftState.name = name;
  draftState.cuit = cuit;
  return draftState;
}

export default fiscalIdentityReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_FISCAL_IDENTITY:
        return setfiscalIdentity({
          draftState,
          name: action.name,
          cuit: action.cuit,
        });
      default:
        return draftState;
    }
  });
};
