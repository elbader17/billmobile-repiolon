import producer from 'immer';
import {
  CREATE_INVOICE,
  LIST_INVOICE,
  GET_INVOICE,
  UPDATE_INVOICE,
  CONFIRM_INVOICE
} from './constants';
import {
  CREATE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  LIST_INVOICE_ITEMS
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
    url: ''
  };
}

const initialState = {
  invoices: [],
  currentInvoice: defaultCurrentInvoice(),
};

function setCurrentInvoice({ draftState, invoice }) {
  const { invoice_date, invoice_type, total, url } = invoice.attributes;
  draftState.currentInvoice.id = invoice.id;
  draftState.currentInvoice.invoiceDate = new Date(invoice_date);
  draftState.currentInvoice.voucherType = invoice_type;
  draftState.currentInvoice.total = total;
  draftState.currentInvoice.url = url;
  return draftState;
}

function setCurrentInvoiceTotal({ draftState, invoice, add }) {
  const { invoice_id, price } = invoice.attributes;
  draftState.currentInvoice.id = invoice_id;
  if (add) draftState.currentInvoice.total = parseInt(draftState.currentInvoice.total) + parseInt(price);
  else draftState.currentInvoice.total -= price;
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

function setInvoiceItems({ draftState, invoice_items }) {
  var items = []
  var item = {}
  var id;
  for (x=0; x<invoice_items.length; x++){
    id = parseInt(invoice_items[x].id);
    item = {...invoice_items[x].attributes, id: id}
    items.push(item)
  }
  draftState.currentInvoice.invoiceItems = items;
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
  } = invoiceItem;
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
      case 'UPDATE_INVOICE_TOTAL':
        return setCurrentInvoiceTotal({
          draftState,
          invoice: action.invoice,
          add: action.add
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
      case CONFIRM_INVOICE:
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
      case LIST_INVOICE_ITEMS:
        return setInvoiceItems({
          draftState,
          invoice_items: action.invoiceItems,
        });
      default:
        return draftState;
    }
  });
};
