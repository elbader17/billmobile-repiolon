import axios from 'axios';
import { fetch_api } from '../../utils/fetchrefresh';
import {
  SET_MY_FISCAL_IDENTITY,
  SET_CERTIFICATE_KEY
} from './constants';

function setMyFiscalIdentity(fiscalIdentity) {
  return {
    type: SET_MY_FISCAL_IDENTITY,
    fiscalIdentity
  };
}

function setCertificateAndKeyPresent(data) {
  return {
    type: SET_CERTIFICATE_KEY,
    data
  };
}

const setFiscalIdentity = () => {
  return (dispatch) => {
    console.log('Set User to Empty');
    const defaultFiscalIdentity = {
      attributes: {
        name: null,
        identification: null
      }
    }
    return dispatch(setMyFiscalIdentity(defaultFiscalIdentity));
  };
};

const updateFiscalIdentity = function (name, cuit, category, ib) {
  const resource = {
    category: category,
    name,
    identification: cuit,
    ingresos_brutos: ib
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.put('/v1/my/fiscal_identity', { resource })
      .then((response) => {
        console.log(response)
        dispatch(setMyFiscalIdentity(response.data.data));
      })
      .catch((error) => {
        console.log(error.response.data.error.identity[0]);
        return error.response.data.error.identity[0]
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
        console.log(response.data.data)
        dispatch(setMyFiscalIdentity(response.data.data));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getCertificate = () => {
  return (dispatch) => {
    return fetch_api('/v1/my/certificate', 'GET', false)
      .then((resources) => {
        console.log(resources)
        dispatch(setCertificateAndKeyPresent(resources.data))
      })
      .catch((error) => console.log(error));
  };
}

const saveFiscalKey = (key) => {
  const resource = {
    fiscal_key: key
  };
  return (dispatch) => {
    return fetch_api('/v1/my/certificate','PUT', false, { resource })
      .then((response) => {
        console.log(response)
        dispatch(setCertificateAndKeyPresent(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export { updateFiscalIdentity, getFiscalIdentity, setFiscalIdentity, saveFiscalKey, getCertificate };
