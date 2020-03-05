import { connect } from 'react-redux';
import Invoice from './Component';
import { addFiscalIdentityToInvoice } from '../../app/fiscal_identity/actions';
import { updateInvoice, createInvoice, getInvoice } from '../../app/invoices/actions';
import { updateInvoiceItem, deleteInvoiceItem, getInvoiceItems } from '../../app/invoice_items/actions';

const mapStateToProps = state => ({
  user: state.userservice,
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
  invoiceDate: state.invoices.currentInvoice.invoiceDate,
  voucherType: state.invoices.currentInvoice.voucherType,
  conditionSale: state.invoices.currentInvoice.conditionSale,
  invoiceId: state.invoices.currentInvoice.id,
  invoiceTotal: state.invoices.currentInvoice.total,
  invoices: state.invoices.invoices
});

const mapDispatchToProps = (dispatch) => {
  return {
    addFiscalIdentityToInvoice: (name, cuit, id) => (
      dispatch(addFiscalIdentityToInvoice(name, cuit, id))
    ),
    updateInvoiceItemQuantity: (id, quantity) => (
      dispatch(updateInvoiceItem(id, { quantity }))
    ),
    updateInvoice: values => (
      dispatch(updateInvoice(values))
    ),
    createInvoice: (invoiceDate, voucherType, conditionSale) => (
      dispatch(createInvoice(invoiceDate, voucherType, conditionSale))
    ),
    getInvoice: (id) => (
      dispatch(getInvoice(id))
    ),
    deleteInvoiceItem: (id, invoiceId) => (
      dispatch(deleteInvoiceItem(id, invoiceId))
    ),
    getInvoiceItems: () => (
      dispatch(getInvoiceItems())
    )
  };
};


const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invoice);

export default component;
