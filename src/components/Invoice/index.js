import { connect } from 'react-redux';
import Invoice from './Component';
import { addFiscalIdentityToInvoice } from '../../app/fiscal_identity/actions';
import { updateInvoice, createInvoice } from '../../app/invoices/actions';
import { updateInvoiceItem } from '../../app/invoice_items/actions';

const mapStateToProps = state => ({
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
  invoiceDate: state.invoices.currentInvoice.invoiceDate,
  voucherType: state.invoices.currentInvoice.voucherType,
  invoiceId: state.invoices.currentInvoice.id,
  invoiceTotal: state.invoices.currentInvoice.total,
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
    createInvoice: (invoiceDate, voucherType) => (
      dispatch(createInvoice(invoiceDate, voucherType))
    ),
  };
};


const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invoice);

export default component;
