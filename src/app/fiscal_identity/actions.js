
import axios from 'axios';

import {
  ADD_FISCAL_IDENTIY_TO_INVOICE,
  SET_FISCAL_IDENTITY,
} from './constants';

function setfiscalIdentity(name, cuit) {
  return {
    type: SET_FISCAL_IDENTITY,
    name,
    cuit,
  };
}

function addfiscalIdentityToInvoiceAction(name, cuit) {
  return {
    type: ADD_FISCAL_IDENTIY_TO_INVOICE,
    fiscalIdentity: { name, cuit },
  };
}

// eslint-disable-next-line func-names
const addFiscalIdentityToInvoice = function (name, cuit) {

  const resource = {
    category: 'monotributo',
    name,
    identification: cuit,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    // return instance.put('/v1/my....', { resource })
    //   .then(() => {
    //     dispatch(addfiscalIdentityToInvoiceAction(name, cuit));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return Promise.resolve(
      dispatch(addfiscalIdentityToInvoiceAction(name, cuit)),
    );
  };
};

export { addFiscalIdentityToInvoice };
