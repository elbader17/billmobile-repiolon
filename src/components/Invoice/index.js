import { connect } from 'react-redux';
import Invoice from './Component';
import { addFiscalIdentityToInvoice } from '../../app/fiscal_identity/actions';
import { updateInvoice, createInvoice, getInvoice, deleteInvoice, listInvoice , resetCurrentInvoice, getFiscalIdentitiesInvoices, setCurrentInvoiceId } from '../../app/invoices/actions';
import { updateInvoiceItem, deleteInvoiceItem, getInvoiceItems } from '../../app/invoice_items/actions';

const mapStateToProps = state => ({
  user: state.userservice,
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
  invoiceDate: state.invoices.currentInvoice.invoiceDate,
  voucherType: state.invoices.currentInvoice.voucherType,
  conditionSale: state.invoices.currentInvoice.conditionSale,
  dateFrom: state.invoices.currentInvoice.dateFrom,
  dateTo: state.invoices.currentInvoice.dateTo,
  paymentExpire: state.invoices.currentInvoice.paymentExpire,
  invoiceId: state.invoices.currentInvoice.id,
  invoiceTotal: state.invoices.currentInvoice.total,
  concept: state.invoices.currentInvoice.concept,
  invoices: state.invoices.invoices,
  invoicesFI: state.invoices.invoiceFiscalIdentities,
  customers: state.customers.customers
});

const mapDispatchToProps = (dispatch) => {
  return {
    addFiscalIdentityToInvoice: (name, cuit, id) => (
      dispatch(addFiscalIdentityToInvoice(name, cuit, id))
    ),
    getFiscalIdentitiesInvoices: () => (
      dispatch(getFiscalIdentitiesInvoices())
    ),
    setCurrentInvoiceId: (id, fiscalIdentity) => (
      dispatch(setCurrentInvoiceId(id, fiscalIdentity))
    ),
    updateInvoiceItemQuantity: (id, quantity) => (
      dispatch(updateInvoiceItem(id, { quantity }))
    ),
    updateInvoice: values => (
      dispatch(updateInvoice(values))
    ),
    listInvoice: () => (
      dispatch(listInvoice())
    ),
    deleteInvoice: (id, invoices) => (
      dispatch(deleteInvoice(id, invoices))
    ),
    createInvoice: (invoiceDate, voucherType, conditionSale, dateFrom, dateTo, paymentExpire, concept) => (
      dispatch(createInvoice(invoiceDate, voucherType, conditionSale, dateFrom, dateTo, paymentExpire, concept))
    ),
    getInvoice: (id) => (
      dispatch(getInvoice(id))
    ),
    deleteInvoiceItem: (id, invoiceId) => (
      dispatch(deleteInvoiceItem(id, invoiceId))
    ),
    getInvoiceItems: () => (
      dispatch(getInvoiceItems())
    ),
    resetCurrentInvoice: () => (
      dispatch(resetCurrentInvoice())
    )
  };
};


const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invoice);

export default component;
