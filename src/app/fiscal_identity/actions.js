
import axios from 'axios';

import {
  ADD_FISCAL_IDENTIY_TO_INVOICE,
} from './constants';

import { createInvoice } from '../invoices/action';

function addfiscalIdentityToInvoiceAction(fiscalIdentity) {
  return {
    type: ADD_FISCAL_IDENTIY_TO_INVOICE,
    fiscalIdentity,
  };
}

const createFiscalIdentity = (resource, dispatch, getState) => {
  const instance = axios.create({
    headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
  });
  return instance.post('/v1/invoices_fiscal_identities', { resource })
    .then((response) => {
      const { data } = response.data;
      dispatch(addfiscalIdentityToInvoiceAction(data));
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const updateFiscalIdentity = (resource, dispatch, getState) => {
  const instance = axios.create({
    headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
  });
  return instance.put(`/v1/invoices_fiscal_identities/${resource.id}`, { resource })
    .then((response) => {
      const { data } = response.data;
      dispatch(addfiscalIdentityToInvoiceAction(data));
    })
    .catch((error) => {
      console.log(error.response);
    });
};


// eslint-disable-next-line func-names
const addFiscalIdentityToInvoice = (name, cuit, id) => {
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
      const updatedInvoiceId = getState().invoices.currentInvoice.id;
      const resource = {
        category: 'monotributo',
        name,
        id,
        identification: cuit,
        invoice_id: updatedInvoiceId,
      };
      return createFiscalIdentity(resource, dispatch, getState);
    });
  };
};

export { addFiscalIdentityToInvoice };
