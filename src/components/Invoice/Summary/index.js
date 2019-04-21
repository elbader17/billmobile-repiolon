import { connect } from 'react-redux';
import InvoiceSummary from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
  invoiceDate: state.invoices.currentInvoice.invoiceDate,
  invoiceTotal: state.invoices.currentInvoice.total,
  voucherType: state.invoices.currentInvoice.voucherType,
});


const component = connect(
  mapStateToProps,
)(InvoiceSummary);

export default component;