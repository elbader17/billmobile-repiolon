
import axios from 'axios';

import {
  SET_FISCAL_IDENTITY,
} from './constants';

function setIdentitiFiscal(name, cuit) {
  return {
    type: SET_FISCAL_IDENTITY,
    name,
    cuit,
  };
}

// eslint-disable-next-line func-names
const registerFiscalIdentity = function (name, cuit) {

  const resource = {
    category: 'monotributo',
    name,
    identification: cuit,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.put('/v1/my....', { resource })
      .then(() => {
        dispatch(setIdentitiFiscal(name, cuit));
      })
      .catch((error) => {
        dispatch(setIdentitiFiscal(name, cuit));
        console.log(error);
      });
  };
};

export { registerFiscalIdentity };
