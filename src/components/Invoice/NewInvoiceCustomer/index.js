import { connect } from 'react-redux';
import NewCustomer from '../../Customer/NewCustomer/Component';
import { addFiscalIdentityToInvoice } from '../../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveFiscalIdentity: (name, cuit, category, id, navigation) => {
      return dispatch(addFiscalIdentityToInvoice(name, cuit, category, id))
        .then(() => navigation.navigate('Invoice'));
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;
