import { connect } from 'react-redux';
import Opinion from './Component';

const mapStateToProps = state => ({
  invoiceUrlPdf: state.invoices.currentInvoice.url,
});

const component = connect(
  mapStateToProps,{}
)(Opinion);

export default component;