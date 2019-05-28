import producer from 'immer';
import {
  SET_FISCAL_IDENTITY,
  ADD_FISCAL_IDENTITY,
} from './constants';

const initialState = {
  name: '',
  category: '',
  identification: '',
};

function setfiscalIdentity({ draftState, name, category, identification }) {
  draftState.name = name;
  draftState.category = category;
  draftState.identification = identification;
  return draftState;
}

export default fiscalIdentityReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_FISCAL_IDENTITY:
        return setfiscalIdentity({
          draftState,
          name: action.name,
          category: action.category,
          identification: action.identification,
        });
      case ADD_FISCAL_IDENTITY:
        return setfiscalIdentity({
          draftState,
          name: action.name,
          category: action.category,
          identification: action.identification,
        });
      default:
        return draftState;
    }
  });
};
