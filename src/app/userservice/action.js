/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable func-names */
import axios from 'axios';
import {
  SET_PARAMS,
} from './constants';

function setParams(name, cuit) {
  return {
    type: SET_PARAMS,
    name,
    cuit,
  };
}

const registerUserService = function (name, cuit, jwtToken) {

  const instance = axios.create({
    baseURL: 'http://192.168.1.18:8888/',
    timeout: 1000,
    headers: { 'JWT-TOKEN': jwtToken },
  });

  const resource = {
    category:'monotributo',
    name:name,
    identification:cuit,
  };

  return (dispatch) => {

    return instance.put('/v1/my/fiscal_identity', {resource} )
      .then((response) => {
        dispatch(setParams(name, cuit));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { registerUserService };

/*
Promise.resolve(1).then((response) => {
      dispatch(setParams(name, cuit, keyfiscal));
    })
    */