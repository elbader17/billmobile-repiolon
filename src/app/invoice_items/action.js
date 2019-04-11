import axios from 'axios';
import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
} from './constant';

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

  const resource = {
    category,
    name,
    price,
  };

  return (dispatch) => {
    // const instance = axios.create({
    //   headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    // });
    // return instance.post(`v1/invoice_items?invoice_id=${invoiceId}`, { resource })
    //   .then((response) => {
    //     dispatch(createInvoiceItemAction(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return Promise.resolve(dispatch(createInvoiceItemAction(resource)));
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
