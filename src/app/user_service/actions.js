/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable func-names */
import axios from 'axios';
import {
  SET_MY_FISCAL_IDENTITY,
} from './constants';

function setMyFiscalIdentity(name, cuit) {
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
    return instance.put('/v1/my/fiscal_identity', { resource })
      .then(() => {
        dispatch(setMyFiscalIdentity(name, cuit));
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
    return instance.get('/v1/my/fiscal_identity')
      .then((response) => {
        const { name, identification } = response.data.data.attributes;
        dispatch(setMyFiscalIdentity(name, identification));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { updateFiscalIdentity, getFiscalIdentity };
