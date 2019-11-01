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
      dispatch(addfiscalIdentityToInvoiceAction(response.data));
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const updateFiscalIdentity = (resource, dispatch) => {
  return fetch_api(`/v1/invoices_fiscal_identities/${resource.id}`, 'POST', false, { resource })
    .then((response) => {
      dispatch(addfiscalIdentityToInvoiceAction(response.data));
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const addFiscalIdentityToInvoice = (name, identity, category, id) => {
  return (dispatch, getState) => {
    const { id: invoiceId } = getState().invoices.currentInvoice;
    let promise;
    if (invoiceId != null)
      promise = Promise.resolve();
    else {
      const { invoiceDate, voucherType } = getState().invoices.currentInvoice;
      promise = dispatch(createInvoice(invoiceDate, voucherType));
    }
    return promise.then(() => {
      const updatedInvoiceId = getState().invoices.currentInvoice.id;
      const resource = {
        category: 'monotributo', //Luego usar parametro
        name,
        id,
        identification: identity,
        invoice_id: updatedInvoiceId,
      };
      return createFiscalIdentity(resource, dispatch, getState);
    });
  };
};

export { addFiscalIdentityToInvoice, updateFiscalIdentity };
