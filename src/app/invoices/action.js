import axios from 'axios';
import {
  LIST_INVOICE,
  GET_INVOICE,
  CREATE_INVOICE,
} from './constant';

function createInvoiceAction(name, price) {
  return {
    type: CREATE_INVOICE,
    name,
    price,
  };
}

function getInvoiceAction(invoice) {
  return {
    type: CREATE_INVOICE,
    invoice,
  };
}

function listInvoiceAction(invoices) {
  return {
    type: LIST_INVOICE,
    invoices,
  };
}

const createInvoice = () => {
  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.post('v1/invoices')
      .then((response) => {
        dispatch(createInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const listInvoice = () => {
  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.get('v1/invoices')
      .then((response) => {
        dispatch(listInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getInvoice = (id) => {
  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.get(`v1/invoices/${id}`)
      .then((response) => {
        dispatch(getInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export { listInvoice, getInvoice, createInvoice };
