import { fetch_api } from '../../utils/fetchrefresh';
import { createInvoice } from '../invoices/actions';
import {
  ADD_FISCAL_IDENTITY_TO_INVOICE,
} from './constants';

const addfiscalIdentityToInvoiceAction = fiscalIdentity => {
  return {
    type: ADD_FISCAL_IDENTITY_TO_INVOICE,
    fiscalIdentity,
  };
}

const createFiscalIdentity = (resource, dispatch) => {
  return fetch_api('/v1/invoices_fiscal_identities', 'POST', false, { resource })
    .then((response) => {
      console.log(response);
      dispatch(addfiscalIdentityToInvoiceAction(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateFiscalIdentity = (data) => {
  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    const resource = {...data, invoice_id: invoiceId }
    return fetch_api(`/v1/invoices_fiscal_identities/${invoiceId}`, 'POST', false, {resource})
      .then((response) => {
        console.log(response);
        dispatch(addfiscalIdentityToInvoiceAction(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
};

const addFiscalIdentityToInvoice = (name, identity, category, id, address, city) => {
  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    let promise;
    if (invoiceId != null)
      promise = Promise.resolve();
    else {
      const { invoiceDate, voucherType, conditionSale } = getState().invoices.currentInvoice;
      promise = dispatch(createInvoice(invoiceDate, voucherType, conditionSale));
    }
    return promise.then(() => {
      const updatedInvoiceId = getState().invoices.currentInvoice.id;
      const resource = {
        category: category,
        name,
        id,
        identification: identity,
        invoice_id: updatedInvoiceId,
        business_address: address,
        city: city
      };
      return createFiscalIdentity(resource, dispatch, getState);
    });
  };
};

export { addFiscalIdentityToInvoice, updateFiscalIdentity };
