import axios from 'axios';
import {
  CREATE_INVOICE,
  UPDATE_INVOICE,
  LIST_INVOICE,
  GET_INVOICE,
} from './constants';

function createInvoiceAction(invoice) {
  return {
    type: CREATE_INVOICE,
    invoice,
  };
}

function updateInvoiceAction(invoice) {
  return {
    type: UPDATE_INVOICE,
    invoice,
  };
}

function getInvoiceAction(invoice) {
  return {
    type: GET_INVOICE,
    invoice,
  };
}

function listInvoiceAction(invoices) {
  return {
    type: LIST_INVOICE,
    invoices,
  };
}

const createInvoice = (invoiceDate, voucherType) => {
  const resource = {
    invoice_date: invoiceDate,
    invoice_type: voucherType,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.post('v1/invoices', { resource })
      .then((response) => {
        console.log(response);
        return dispatch(createInvoiceAction(response.data.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

const updateInvoice = (values) => {
  let resource = {};
  if (values.invoiceDate != null) {
    resource.invoice_date = values.invoiceDate;
  }
  if (values.voucherType != null) {
    resource.invoice_type = values.voucherType;
  }

  return (dispatch, getState) => {
    const { jwtToken } = getState().authentication;
    const { id: invoiceId } = getState().invoices.currentInvoice;
    const instance = axios.create({
      headers: { 'JWT-TOKEN': jwtToken },
    });

    return instance.put(`v1/invoices/${invoiceId}`, { resource })
      .then((response) => {
        return dispatch(updateInvoiceAction(response.data.data));
      })
      .catch((error) => {
        console.log(error.response);
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
        dispatch(listInvoiceAction(response.data.data));
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
        dispatch(getInvoiceAction(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export { listInvoice, getInvoice, createInvoice, updateInvoice };
