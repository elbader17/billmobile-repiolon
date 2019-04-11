/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import NewCustomer from './Component';
import { addFiscalIdentityToInvoice } from '../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  name: state.invoices.currentInvoice.fiscalIdentity.name,
  cuit: state.invoices.currentInvoice.fiscalIdentity.cuit,
});

function mapDispatchToProps(dispatch) {
  return {
    addFiscalIdentityToInvoice: (name, cuit) => dispatch(addFiscalIdentityToInvoice(name, cuit)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;
