import { fetch_api } from '../../utils/fetchrefresh';
import {
  CREATE_INVOICE,
  UPDATE_INVOICE,
  LIST_INVOICE,
  GET_INVOICE,
  CONFIRM_INVOICE,
  RESET_INVOICE
} from './constants';

function createInvoiceAction(invoice, concept) {
  return {
    type: CREATE_INVOICE,
    invoice,
    concept
  };
}

function updateInvoiceAction(invoice) {
  return {
    type: UPDATE_INVOICE,
    invoice
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

function fiscalInvoicesAction(fiscalIdentities) {
  return {
    type: 'FISCAL_INVOICES',
    fiscalIdentities,
  };
}

function resetCurrentInvoiceAction() {
  return {
    type: RESET_INVOICE
  }
}

function deleteInvoiceAction(id, invoices) {
  return {
    type: 'DELETE_INVOICE',
    invoices: invoices,
    id: id
  }
}

function resetCurrentInvoiceIdAction(id, fiscalIdentity) {
  return {
    type: 'RESET_INVOICE_ID',
    id: id,
    fiscalIdentity: fiscalIdentity
  }

}

const createInvoice = (invoiceDate, voucherType, conditionSale, dateFrom, dateTo, paymentExpire, concept) => {
  const resource = {
    invoice_date: invoiceDate,
    invoice_type: voucherType,
    condition_sale: conditionSale,
    date_from: dateFrom,
    date_to: dateTo,
    payment_expiration: paymentExpire,
    concept: concept
  };
  console.log('create invoice');
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
  console.log('update invoice');
  let resource = {};
  if (values.invoiceDate != null) 
    resource.invoice_date = values.invoiceDate;
  if (values.voucherType != null) 
    resource.invoice_type = values.voucherType;
  if (values.conditionSale != null) 
    resource.condition_sale = values.conditionSale;
  
  resource.date_from = values.dateFrom;
  resource.date_to = values.dateTo
  resource.payment_expiration = values.paymentExpire
  resource.concept = values.concept

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

const deleteInvoice = (id, invoices) => {
  return (dispatch) => {
    return fetch_api(`/v1/invoices/${id}`, 'DELETE', false)
      .then((response) => {
        console.log(response)
        dispatch(deleteInvoiceAction(id, invoices));
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
    console.log(resource)
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

const getFiscalIdentitiesInvoices = () => {
  return (dispatch) => {
    return fetch_api('/v1/invoices_fiscal_identities','GET', false)
      .then((response) => {
        console.log(response);
        dispatch(fiscalInvoicesAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const resetCurrentInvoice = () => {
  console.log('Reset Invoice');
  return dispatch => {
    return dispatch(resetCurrentInvoiceAction());
  }
}

const setCurrentInvoiceId = (id, fiscalIdentity) => {
  return dispatch => {
    return dispatch(resetCurrentInvoiceIdAction(id, fiscalIdentity));
  }
}

export { 
  listInvoice, 
  getInvoice, 
  createInvoice,
  deleteInvoice, 
  updateInvoice, 
  confirmInvoice, 
  resetCurrentInvoice,
  getFiscalIdentitiesInvoices,
  setCurrentInvoiceId
};
