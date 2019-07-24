import { connect } from 'react-redux';
import InvoiceSummary from './Component';
import { confirmInvoice } from '../../../app/invoices/actions';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
  invoiceDate: state.invoices.currentInvoice.invoiceDate,
  invoiceTotal: state.invoices.currentInvoice.total,
  voucherType: state.invoices.currentInvoice.voucherType,
});

function mapDispatchToProps(dispatch) {
  return {
    confirmInvoice: (attributes, navigation) => {
      dispatch(confirmInvoice(attributes))
        .then(() => {
          navigation.navigate('Opinion');
        });
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceSummary);

export default component;