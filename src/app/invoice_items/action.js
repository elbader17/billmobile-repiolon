import axios from 'axios';
import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
} from './constant';
import { createInvoice } from '../invoices/action';

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

// eslint-disable-next-line func-names
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
        price,
        invoice_id: updatedInvoiceId,
      };
      return instance.post('v1/invoice_items', { resource })
        .then((response) => {
          dispatch(createInvoiceItemAction(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};


const updateInvoiceItem = (id, name, price) => {
  const resource = {
    name,
    price,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.put(`v1/invoice_items/${id}`, { resource })
      .then((response) => {
        dispatch(updateInvoiceItemAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export { createInvoiceItem, updateInvoiceItem };
