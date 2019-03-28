import producer from 'immer';
import {
  SET_IDENTITI_FISCAL,
} from './constants';

const initialState = {
  name: '',
  cuit: '',
};

function setIdentitiFiscal({ draftState, name, cuit }) {
  draftState.name = name;
  draftState.cuit = cuit;
  return draftState;
}

export default identitiFiscalReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_IDENTITI_FISCAL:
        return setIdentitiFiscal({
          draftState,
          name: action.name,
          cuit: action.cuit,
        });
      default:
        return draftState;
    }
  });
};
