import producer from 'immer';
import {
  CREATE_INVOICE,
  LIST_INVOICE,
  GET_INVOICE,
  UPDATE_INVOICE,
} from './constants';
import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
} from '../invoice_items/constants';
import {
  ADD_FISCAL_IDENTITY_TO_INVOICE,
} from '../fiscal_identity/constants';

function defaultCurrentInvoice() {
  return {
    fiscalIdentity: { name: '', cuit: '' },
    invoiceItems: [],
    invoiceDate: new Date(),
    voucherType: 'fc',
    id: null,
    total: 0.0,
  };
}

const initialState = {
  invoices: [],
  currentInvoice: defaultCurrentInvoice(),
};

function setCurrentInvoice({ draftState, invoice }) {
  const { invoice_date, invoice_type, total } = invoice.attributes;
  draftState.currentInvoice.id = invoice.id;
  draftState.currentInvoice.invoiceDate = new Date(invoice_date);
  draftState.currentInvoice.voucherType = invoice_type;
  draftState.currentInvoice.total = total;
  return draftState;
}

function setInvoices({ draftState, invoices }) {
  draftState.invoices = invoices;
  return draftState;
}

function addInvoiceItem({ draftState, invoiceItem }) {
  const {
    category,
    name,
    price,
    quantity,
  } = invoiceItem.attributes;

  draftState.currentInvoice.invoiceItems.push({
    category,
    name,
    price,
    quantity,
    id: invoiceItem.id,
  });
  return draftState;
}

function addFiscalIdentity({ draftState, fiscalIdentity }) {
  draftState.currentInvoice.fiscalIdentity = fiscalIdentity.attributes;
  draftState.currentInvoice.fiscalIdentity.id = fiscalIdentity.id;
  return draftState;
}

function updateInvoiceItem({ draftState, invoiceItem }) {
  const {
    category,
    name,
    price,
    quantity,
  } = invoiceItem.attributes;
  const itemIndex = draftState.currentInvoice.invoiceItems.findIndex(
    item => item.id === invoiceItem.id,
  );
  draftState.currentInvoice.invoiceItems[itemIndex] = {
    category,
    name,
    price,
    quantity,
    id: invoiceItem.id,
  };
  return draftState ;
}

function resetCurrentInvoice({ draftState }) {
  draftState.currentInvoice = defaultCurrentInvoice();
  return draftState;
}

export default addInvoiceReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case CREATE_INVOICE:
        return setCurrentInvoice({
          draftState,
          invoice: action.invoice,
        });
      case UPDATE_INVOICE:
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
      case ADD_FISCAL_IDENTITY_TO_INVOICE:
        return addFiscalIdentity({
          draftState,
          fiscalIdentity: action.fiscalIdentity,
        });
      default:
        return draftState;
    }
  });
};
