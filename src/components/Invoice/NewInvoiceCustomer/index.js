import { connect } from 'react-redux';
import NewCustomer from '../../Customer/NewCustomer/Component';
import { addFiscalIdentityToInvoice } from '../../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveFiscalIdentity: (name, identification, category, id, address, city) => (
      dispatch(addFiscalIdentityToInvoice(name, identification, category, id, address, city))
    ),
    type: 'invoice'
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;