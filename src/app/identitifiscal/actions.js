import { Auth } from 'aws-amplify';
import { Alert } from 'react-native';
import axios from 'axios';
import store from '../../store';
import API from './apis';
import {
  SET_IDENTITI_FISCAL,
} from './constants';

function setIdentitiFiscal(name, cuit) {
  return {
    type: SET_IDENTITI_FISCAL,
    name,
    cuit,
  };
}



const registerFiscalIdentiti = function(name, cuit, jwtToken) {

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

    return instance.put('/v1/my....', {resource} )
      .then((response) => {
        dispatch(setIdentitiFiscal(name, cuit));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
};

export { registerFiscalIdentiti };

