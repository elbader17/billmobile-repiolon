import { fetch_api } from '../../utils/fetchrefresh';
import {
  CREATE_INVOICE,
  UPDATE_INVOICE,
  LIST_INVOICE,
  GET_INVOICE,
  CONFIRM_INVOICE,
  RESET_INVOICE
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

function resetCurrentInvoiceAction() {
  return {
    type: RESET_INVOICE
  }
}

const createInvoice = (invoiceDate, voucherType, conditionSale) => {
  const resource = {
    invoice_date: invoiceDate,
    invoice_type: voucherType,
    condition_sale: conditionSale
  };
  console.log(resource);
  return (dispatch) => {
    return fetch_api('/v1/invoices', 'POST', false, { resource })
      .then((response) => {
        console.log(response);
        dispatch(createInvoiceAction(response.data))
      })
      .catch((error) => console.log(error));
  };
};

const updateInvoice = (values) => {
  let resource = {};
  if (values.invoiceDate != null) 
    resource.invoice_date = values.invoiceDate;
  if (values.voucherType != null) 
    resource.invoice_type = values.voucherType;
  if (values.conditionSale != null) 
    resource.condition_sale = values.conditionSale;

  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    return fetch_api(`/v1/invoices/${invoiceId}`,'PUT', false, { resource })
      .then((response) => {
        console.log(response);
        dispatch(updateInvoiceAction(response.data))
      })
      .catch((error) => console.log(error));
  };
};

const listInvoice = () => {
  return (dispatch) => {
    return fetch_api('/v1/invoices', 'GET', false)
      .then((response) => {
        console.log(response)
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
        console.log(response.data)
        dispatch(getInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const confirmInvoice = (attributes) => {
  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    const resource = {
      invoice_id: invoiceId,
      state: attributes.state,
      total: attributes.total
    }
    return fetch_api(`/v1/invoices/${invoiceId}/confirm`,'PUT', false, { resource })
      .then((response) => {
        console.log(response);
        dispatch(confirmInvoiceAction(response.data));
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
};

const resetCurrentInvoice = () => {
  console.log('Reset Invoice');
  return dispatch => {
    return dispatch(resetCurrentInvoiceAction());
  }
}

export { 
  listInvoice, 
  getInvoice, 
  createInvoice, 
  updateInvoice, 
  confirmInvoice, 
  resetCurrentInvoice
};
