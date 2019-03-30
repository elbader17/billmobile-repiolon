
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
const registerFiscalIdentity = function (name, cuit, jwtToken) {

  const instance = axios.create({
    baseURL: 'http://192.168.1.18:8888/',
    timeout: 1000,
    headers: { 'JWT-TOKEN': jwtToken },
  });

  const resource = {
    category: 'monotributo',
    name,
    identification: cuit,
  };

  return (dispatch) => {
    return instance.put('/v1/my....', { resource })
      .then(() => {
        dispatch(setIdentitiFiscal(name, cuit));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { registerFiscalIdentity };
