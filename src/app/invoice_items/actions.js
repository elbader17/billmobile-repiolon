import axios from 'axios';
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
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.put(
      `v1/invoice_items/${id}`,
      { resource: { ...values, invoice_id: invoiceId } },
    ).then((response) => {
      dispatch(updateInvoiceItemAction(response.data));
      return dispatch(getInvoice(invoiceId));
    }).catch((error) => {
      console.log(error.response)
    });
  };
};

const createInvoiceItem = (category, name, price) => {
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
      const instance = axios.create({
        headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
      });
      const { id: updatedInvoiceId } = getState().invoices.currentInvoice;
      const resource = {
        category,
        name,
        price: parseFloat(price, 10),
        invoice_id: updatedInvoiceId,
      };
      return instance.post('v1/invoice_items', { resource })
        .then((response) => {
          dispatch(createInvoiceItemAction(response.data.data));
          return dispatch(getInvoice(updatedInvoiceId));
        })
        .catch((error) => {
          console.log(error.response);
        });
    });
  };
};

export { createInvoiceItem, updateInvoiceItem };
