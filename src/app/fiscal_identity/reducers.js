import producer from 'immer';
import {
  ADD_FISCAL_IDENTITY,
} from './constants';

const initialState = {
  name: '',
  category: '',
  identification: '',
  business_name: '',
  business_address: '',
  business_start_date: '',
  city: '',
  ingresos_brutos: '',
  sale_point: ''
};

function setfiscalIdentity({ draftState, name, category, identification, business_address, city }) {
  draftState.name = name;
  draftState.category = category;
  draftState.identification = identification;
  draftState.business_address = business_address,
  draftState.city = city
  return draftState;
}

export default fiscalIdentityReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case ADD_FISCAL_IDENTITY:
        return setfiscalIdentity({
          draftState,
          name: action.name,
          category: action.category,
          identification: action.identification,
          business_address: action.business_address,
          city: action.city
        });
      default:
        return draftState;
    }
  });
};
