import { connect } from 'react-redux';
import InvoiceSummary from './Component';
import { confirmInvoice, resetCurrentInvoice, getInvoice } from '../../../app/invoices/actions';
import { getCertificate } from '../../../app/user_service/actions';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
  invoiceDate: state.invoices.currentInvoice.invoiceDate,
  invoiceTotal: state.invoices.currentInvoice.total,
  invoiceId: state.invoices.currentInvoice.id,
  invoiceUrl: state.invoices.currentInvoice.url,
  voucherType: state.invoices.currentInvoice.voucherType,
});

function mapDispatchToProps(dispatch) {
  return {
    confirmInvoice: (attributes) => (
      dispatch(confirmInvoice(attributes))   
    ),
    getInvoice: (id) => (
      dispatch(getInvoice(id))   
    ),
    resetCurrentInvoice: () => (
      dispatch(resetCurrentInvoice())
    ),
    getCertificate: () => dispatch(getCertificate()),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceSummary);

export default component;