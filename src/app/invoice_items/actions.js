import { fetch_api } from '../../utils/fetchrefresh';
import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  LIST_INVOICE_ITEMS
} from './constants';
import {
  createInvoice,
  getInvoice
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

function setInvoiceItemsAction(invoiceItems) {
  return {
    type: LIST_INVOICE_ITEMS,
    invoiceItems,
  };
}

const updateInvoiceItem = (id, values, quantity, date_from, date_to, payment_expiration) => {
  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    const resource = {
      ...values, 
      invoice_id: invoiceId, 
      date_from, 
      date_to, 
      payment_expiration
    }
    return fetch_api(`/v1/invoice_items/${id}`, 'POST', false, { resource })
      .then((response) => {
        dispatch(updateInvoiceItemAction(response));
        return dispatch(getInvoiceItems(invoiceId));
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

const deleteInvoiceItem = (id, invoiceId) => {
  return () => {
    return fetch_api(`/v1/invoice_items/${id}`,'DELETE', false, {resource: {invoice_id: invoiceId}})
      .then(response => response)
      .catch((error) => console.log(error));
  };
};

const getInvoiceItems = () => {
  return (dispatch, getState) => {
    const { id } = getState().invoices.currentInvoice;
    return fetch_api(`/v1/invoice_items/${id}`,'GET', false)
      .then(response => {
        dispatch(setInvoiceItemsAction(response.data))
      })
      .catch(error => console.log(error));
  };
};

const createInvoiceItem = ({category, name, price, quantity, item_id, dateFrom, dateTo, paymentExpiration}) => {
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
        item_id,
        quantity,
        date_from: dateFrom,
        date_to: dateTo,
        payment_expiration: paymentExpiration
      };
      return fetch_api('/v1/invoice_items', 'POST', false, { resource })
        .then((response) => {
          console.log(response.data)
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
