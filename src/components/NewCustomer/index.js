/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import NewCustomer from './Component';
import { addFiscalIdentityToInvoice } from '../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.fiscalIdentity,
});

const mapDispatchToProps = dispatch => {
  return {
    addFiscalIdentity: (name, cuit, navigation) => {
      dispatch(addFiscalIdentityToInvoice(name, cuit))
        .then(() => navigation.navigate('Invoice'));
    },
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;
