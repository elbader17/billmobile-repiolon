import { connect } from 'react-redux';
import InvoiceSummary from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
});


const component = connect(
  mapStateToProps,
)(InvoiceSummary);

export default component;