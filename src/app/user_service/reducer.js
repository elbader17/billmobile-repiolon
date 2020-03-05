import producer from 'immer';
import {
  SET_MY_FISCAL_IDENTITY,
} from './constants';

const initialState = {
  name: null,
  cuit: null,
  completed: false,
  business_address: '',
  city: '',
  sale_point: ''
};

function setMyFiscalIdentity({draftState, fiscalIdentity }) {
  if (fiscalIdentity != null) {
    const { name, identification, business_address, city, sale_point } = fiscalIdentity.attributes;
    draftState.name = name;
    draftState.cuit = identification;
    draftState.completed = name != null && identification != null;
    draftState.business_address = business_address;
    draftState.city = city;
    draftState.sale_point = sale_point;
  }
  return draftState;
}

export default userserviceReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_MY_FISCAL_IDENTITY:
        return setMyFiscalIdentity({
          draftState,
          fiscalIdentity: action.fiscalIdentity
        });
      default:
        return draftState;
    }
  });
};
