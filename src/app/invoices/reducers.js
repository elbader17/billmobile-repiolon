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
import { invoiceDateString } from '../../utils/date';

function defaultCurrentInvoice() {
  return {
    fiscalIdentity: null,
    invoiceItems: [],
    invoiceDate: invoiceDateString(),
    voucherType: '11',
    conditionSale: 'cdo',
    concept: 'Productos',
    id: null,
    total: 0.0,
    url: '',
    dateFrom: invoiceDateString(),
    dateTo: invoiceDateString(),
    paymentExpire: invoiceDateString()
  };
}

const initialState = {
  invoices: [],
  invoiceFiscalIdentities: [],
  currentInvoice: defaultCurrentInvoice(),
};

function setCurrentInvoice({ draftState, invoice }) {
  const { invoice_date, invoice_type, total, url, condition_sale, concept, date_from, date_to, payment_expiration } = invoice.attributes;
  const day = invoice_date.slice(8,10);
  const month = invoice_date.slice(5,7);
  const year = invoice_date.slice(0,4);
  console.log('setCurrentId', invoice.id);
  draftState.currentInvoice.id = invoice.id;
  draftState.currentInvoice.invoiceDate = (day+"/"+month+"/"+year);
  draftState.currentInvoice.dateFrom = (date_from.slice(8,10)+"/"+date_from.slice(5,7)+"/"+date_from.slice(0,4));
  draftState.currentInvoice.dateTo = (date_to.slice(8,10)+"/"+date_to.slice(5,7)+"/"+date_to.slice(0,4));
  draftState.currentInvoice.paymentExpire = (payment_expiration.slice(8,10)+"/"+payment_expiration.slice(5,7)+"/"+payment_expiration.slice(0,4));
  draftState.currentInvoice.voucherType = invoice_type;
  draftState.currentInvoice.total = total;
  draftState.currentInvoice.url = url;
  draftState.currentInvoice.conditionSale = condition_sale;
  draftState.currentInvoice.concept = concept;
  return draftState;
}

function setInvoiceId({ draftState, id, fiscalIdentity }) {
  console.log('Set Invoice Id and Fiscal Identity', id, fiscalIdentity)
  draftState.currentInvoice.id = id;
  draftState.currentInvoice.fiscalIdentity = fiscalIdentity != null ? fiscalIdentity.attributes : null;
  return draftState;
}

function setInvoiceFiscalIdentities({ draftState, fiscal_identities }) {
  draftState.invoiceFiscalIdentities = fiscal_identities;
  return draftState;
}

function setInvoices({ draftState, invoices }) {
  draftState.invoices = invoices;
  return draftState;
}

function deleteInvoice({ draftState, invoices, id }) {
  console.log('Delete Invoice', id);
  const invoicesNew = []
  for (x=0; x<invoices.length; x++){
    if (invoices[x].id != id) {
      invoicesNew.push(invoices[x])
    }
    console.log(invoices[x].id, id)
  }
  draftState.invoices = invoices;
  return draftState;
}

function addInvoiceItem({ draftState, invoiceItem }) {
  const {
    category,
    name,
    price,
    quantity
  } = invoiceItem.attributes;

  draftState.currentInvoice.invoiceItems.push({
    category,
    name,
    price,
    quantity,
    id: invoiceItem.id
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
    quantity
  } = invoiceItem;
  const itemIndex = draftState.currentInvoice.invoiceItems.findIndex(
    item => item.id === invoiceItem.id,
  );
  draftState.currentInvoice.invoiceItems[itemIndex] = {
    category,
    name,
    price,
    quantity,
    id: invoiceItem.id
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
          invoice: action.invoice
        });
      case UPDATE_INVOICE:
        return setCurrentInvoice({
          draftState,
          invoice: action.invoice
        });
      case 'FISCAL_INVOICES':
        return setInvoiceFiscalIdentities({
          draftState,
          fiscal_identities: action.fiscalIdentities
        });
      case 'RESET_INVOICE_ID':
        return setInvoiceId({
          draftState,
          id: action.id,
          fiscalIdentity: action.fiscalIdentity
        });
      case 'DELETE_INVOICE':
        return deleteInvoice({
          draftState,
          invoices: action.invoices,
          id: action.id
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
