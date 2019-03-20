/* eslint-disable no-undef */
/* eslint-disable func-names */
import { Auth } from 'aws-amplify';
import { Alert } from 'react-native';
import axios from 'axios';
import {
  SET_PARAMS,
} from './constants';

function setParams(name, cuit, keyfiscal) {
  return {
    type: SET_PARAMS,
    name,
    cuit,
    keyfiscal,
  };
}

const registerUserService = function(name, cuit, keyfiscal) {

  return (dispatch) => {
    return axios.post('192.168.1.18/v1/.....', {
      name,
      cuit,
      keyfiscal,
    }).then((response) => {
      dispatch(setParams(name, cuit, keyfiscal));
    })
      .catch((error) => {
        dispatch(setParams(name, cuit, keyfiscal));
        console.log(error);
      });
  };
};

export { registerUserService };