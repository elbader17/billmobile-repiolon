/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import NewCustomer from '../../NewCustomer/Component';
import { addFiscalIdentityToInvoice } from '../../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addFiscalIdentity: (name, cuit, id, navigation) => {
      return dispatch(addFiscalIdentityToInvoice(name, cuit, id))
        .then(() => navigation.navigate('Invoice'));
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;
