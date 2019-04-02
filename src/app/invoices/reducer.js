import producer from 'immer';
import {
  CREATE_INVOICE,
  LIST_INVOICE,
  GET_INVOICE,
} from './constant';
import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
} from '../invoice_items/constant';

const initialState = {
  invoices: [],
  currentInvoice: null,
};

function setCurrentInvoice({ draftState, invoice }) {
  draftState.currentInvoice = invoice;
  return draftState;
}

function setInvoices({ draftState, invoices }) {
  draftState.invoices = invoices;
  return draftState;
}

function addInvoiceItem({ draftState, invoiceItem }) {
  draftState.currentInvoice.invoiceItems.push(invoiceItem);
  return draftState;
}
function updateInvoiceItem({ draftState }) {
  return draftState;
}

export default invoicesReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case CREATE_INVOICE:
        return setCurrentInvoice({
          draftState,
          invoice: action.invoice,
        });
      case LIST_INVOICE:
        return setInvoices({
          draftState,
          invoices: action.invoices,
        });
      case GET_INVOICE:
        return setCurrentInvoice({
          draftState,
          invoice: action.invoice,
        });
      case CREATE_INVOICE_ITEM:
        return addInvoiceItem({
          draftState,
          invoiceItem: action.invoiceItem,
        });
      case UPDATE_INVOICE_ITEM:
        return updateInvoiceItem({
          draftState,
          invoiceItem: action.invoiceItem,
        });
      default:
        return draftState;
    }
  });
};
