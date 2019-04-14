/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable func-names */
import axios from 'axios';
import {
  SET_MY_FISCAL_IDENTITY,
} from './constants';

function setParams(name, cuit) {
  return {
    type: SET_MY_FISCAL_IDENTITY,
    name,
    cuit,
  };
}

const updateFiscalIdentity = function (name, cuit) {
  const resource = {
    category: 'monotributo',
    name,
    identification: cuit,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    console.log('UPDATING FISCAL IDENTITY ', name, ' ', cuit);
    return instance.put('/v1/my/fiscal_identity', { resource })
      .then(() => {
        dispatch(setParams(name, cuit));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getFiscalIdentity = function () {
  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    console.log('GETTING FISCAL IDENTITY');
    return instance.get('/v1/my/fiscal_identity')
      .then((response) => {
        console.log(response);
        dispatch(setParams(response.data.name, response.data.cuit));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { updateFiscalIdentity, getFiscalIdentity };
