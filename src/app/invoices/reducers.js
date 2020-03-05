import producer from 'immer';
import {
  CREATE_INVOICE,
  LIST_INVOICE,
  GET_INVOICE,
  UPDATE_INVOICE,
  CONFIRM_INVOICE,
  RESET_INVOICE
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
  var date = new Date();
  return {
    fiscalIdentity: { name: '', cuit: '', category: ''},
    invoiceItems: [],
    invoiceDate: date,
    voucherType: '11',
    conditionSale: 'cdo',
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
  const { invoice_date, invoice_type, total, url, condition_sale } = invoice.attributes;
  draftState.currentInvoice.id = invoice.id;
  const day = invoice_date.slice(8,10);
  const month = invoice_date.slice(5,7);
  const year = invoice_date.slice(0,4);
  console.log(day, month, year);
  draftState.currentInvoice.invoiceDate = new Date(year+","+month+","+day);
  draftState.currentInvoice.voucherType = invoice_type;
  draftState.currentInvoice.total = total;
  draftState.currentInvoice.url = url;
  draftState.currentInvoice.conditionSale = condition_sale;
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
    date_from,
    date_to,
    payment_expiration
  } = invoiceItem.attributes;

  draftState.currentInvoice.invoiceItems.push({
    category,
    name,
    price,
    quantity,
    id: invoiceItem.id,
    date_from,
    date_to,
    payment_expiration
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
  console.log('Add Fiscal Identity to Invoice')
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
    date_from,
    date_to,
    payment_expiration
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
    date_from,
    date_to,
    payment_expiration
  };
  return draftState ;
}

function resetCurrentInvoice({ draftState }) {
  console.log('Reset Invoice');
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
      case RESET_INVOICE:
        return resetCurrentInvoice({
          draftState
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
      case LIST_INVOICE_ITEMS:
        return resetCurrentInvoice({
          draftState
        });
      default:
        return draftState;
    }
  });
};
