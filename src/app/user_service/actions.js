import axios from 'axios';
import { fetch_api } from '../../utils/fetchrefresh';
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
/*
function getCertificateAction(value) {
  return {
    type: 'SET_USER_CERTIFICATE',
    value
  };
}

function getCertificateAction(values) {
  return {
    type: 'SET_CERTIFICATEs',
    values
  };
}*/

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
    console.log(resource, getState().authentication.jwtToken)
    return instance.put('/v1/my/fiscal_identity', { resource })
      .then((response) => {
        console.log(response)
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
        console.log(response)
        const { name, identification } = response.data.data.attributes;
        dispatch(setMyFiscalIdentity(name, identification));
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
        //dispatch(getCertificateAction(resources.data))
      })
      .catch((error) => console.log(error));
  };
}

const uploadCertificate = (pkey, cert) => {
  const resource = {
    pkey,
    cert
  };
  return (dispatch) => {
    return fetch_api('/v1/my/certificate','PUT', false, { resource })
      .then((response) => {
        console.log(response)
        //dispatch(uploadCertificateAction(resource.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export { updateFiscalIdentity, getFiscalIdentity, getCertificate, uploadCertificate };
