import { fetch_api } from '../../utils/fetchrefresh';
import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
} from './constants';
import {
  createInvoice,
  getInvoice,
} from '../invoices/actions';

function createInvoiceItemAction(invoiceItem) {
  return {
    type: CREATE_INVOICE_ITEM,
    invoiceItem,
  };
}

function updateInvoiceItemAction(invoiceItem) {
  return {
    type: UPDATE_INVOICE_ITEM,
    invoiceItem,
  };
}

const updateInvoiceItem = (id, values) => {
  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    return fetch_api(`/v1/invoice_items/${id}`, 'POST', false, 
    { resource: { ...values, invoice_id: invoiceId } })
        .then((response) => {
           console.log(response);
           dispatch(updateInvoiceItemAction(response.data));
           return dispatch(getInvoice(invoiceId));
        })
        .catch((error) => {
          console.log(error)
        });
  };
};

const deleteInvoiceItem = (id) => {
  return () => {
    return fetch_api(`/v1/invoice_items/${id}`,'GET', false)
      .then(() => console.log('OK'))
      .catch((error) => console.log(error));
  };
};

const getInvoiceItems = () => {
  return (getState) => {
    const { id } = getState().invoices.currentInvoice;
    return fetch_api(`/v1/invoice_items/${id}`,'GET', false)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
};

const createInvoiceItem = ({category, name, price, quantity}) => {
  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    let promise;
    if (invoiceId != null) {
      promise = Promise.resolve();
    } else {
      const { invoiceDate, voucherType } = getState().invoices.currentInvoice;
      promise = dispatch(createInvoice(invoiceDate, voucherType));
    }
    return promise.then(() => {
      const { id: updatedInvoiceId } = getState().invoices.currentInvoice;
      const resource = {
        category,
        name,
        price: parseFloat(price, 10),
        invoice_id: updatedInvoiceId,
        quantity
      };
      return fetch_api('/v1/invoice_items', 'POST', false, { resource })
        .then((response) => {
          dispatch(createInvoiceItemAction(response.data));
          return dispatch(getInvoice(updatedInvoiceId));
        })
        .catch((error) => {
          console.log(error.response);
        });
    });
  };
};

export { createInvoiceItem, updateInvoiceItem, deleteInvoiceItem, getInvoiceItems };
