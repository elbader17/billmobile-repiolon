import { connect } from 'react-redux';
import Invoice from './Component';

const mapStateToProps = state => ({
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
  invoiceDate: state.invoices.currentInvoice.invoiceDate,
  voucherType: state.invoices.currentInvoice.voucherType,
});


const component = connect(
  mapStateToProps,
)(Invoice);

export default component;
