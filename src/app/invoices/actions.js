import { fetch_api } from '../../utils/fetchrefresh';
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

function confirmInvoiceAction(invoice) {
  return {
    type: CONFIRM_INVOICE,
    invoice,
  };
}

const createInvoice = (invoiceDate, voucherType) => {
  const resource = {
    invoice_date: invoiceDate,
    invoice_type: voucherType
  };
  return (dispatch) => {
    return fetch_api('/v1/invoices', 'POST', false, { resource })
      .then((response) => dispatch(createInvoiceAction(response.data)))
      .catch((error) => console.log(error.response));
  };
};

const updateInvoice = (values) => {
  let resource = {};
  if (values.invoiceDate != null) 
    resource.invoice_date = values.invoiceDate;
  if (values.voucherType != null) 
    resource.invoice_type = values.voucherType;

  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    return fetch_api(`/v1/invoices/${invoiceId}`,'PUT', false, { resource })
      .then((response) => dispatch(updateInvoiceAction(response.data)))
      .catch((error) => console.log(error));
  };
};

const listInvoice = () => {
  return (dispatch) => {
    return fetch_api('/v1/invoices', 'GET', false)
      .then((response) => {
        console.log(response);
        dispatch(listInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

const getInvoice = (id) => {
  return (dispatch) => {
    return fetch_api(`/v1/invoices/${id}`, 'GET', false)
      .then((response) => {
        console.log(response)
        dispatch(getInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const confirmInvoice = (attributes) => {
  const resource = {
    state:"confirm",
    invoice_id: 8,
    user_id :1,
    total: "10",
    id: "1"
  }
  return (dispatch) => {
    return fetch_api('/v1/invoices/confirm','PUT', false, { resource })
      .then((response) => {
        console.log(response);
        dispatch(confirmInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { listInvoice, getInvoice, createInvoice, updateInvoice, confirmInvoice };
