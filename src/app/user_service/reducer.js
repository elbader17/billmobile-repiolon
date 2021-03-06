import producer from 'immer';
import {
  SET_MY_FISCAL_IDENTITY,
  SET_CERTIFICATE_KEY
} from './constants';

const initialState = {
  name: null,
  cuit: null,
  cert: false,
  ib: '',
  fiscal_key: false,
  completed: false,
  business_address: '',
  city: '',
  sale_point: '',
  clase: null,
  token_device: null
};

function setMyFiscalIdentity({draftState, fiscalIdentity }) {
  console.log(fiscalIdentity);
  if (fiscalIdentity != null) {
    const { name, identification, business_address, city, sale_point, ingresos_brutos, clase } = fiscalIdentity.attributes;
    draftState.name = name;
    draftState.cuit = identification;
    draftState.completed = name != null && identification != null;
    draftState.business_address = business_address;
    draftState.city = city;
    draftState.sale_point = sale_point;
    draftState.ib = ingresos_brutos;
    draftState.clase = clase;
  }
  return draftState;
}

function setCertificateKey({draftState, data }) {
  const cert = data != null ? data.attributes.cert : false;
  const fiscal_key = data != null ? data.attributes.fiscal_key : false;

  draftState.cert = cert;
  draftState.fiscal_key = fiscal_key;
  
  return draftState;
}

function setTokenDevice({draftState, token }) {
  draftState.token_device = token;
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
      case SET_CERTIFICATE_KEY:
        return setCertificateKey({
          draftState,
          data: action.data
        });
      case 'SET_TOKEN_DEVICE':
        return setTokenDevice({
          draftState,
          token: action.token
        });
      default:
        return draftState;
    }
  });
};
