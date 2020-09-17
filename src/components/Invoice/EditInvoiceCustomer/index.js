import { connect } from 'react-redux';
import NewCustomer from '../../Customer/NewCustomer/Component';
import { updateFiscalIdentity } from '../../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  invoiceId: state.invoices.currentInvoice.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveFiscalIdentity: (name, identification, category, id, address, city) => {
      const resource = {
        id,
        name,
        identification,
        category, 
        business_address: address, 
        city
      }
      return dispatch(updateFiscalIdentity(resource))
    },
    type: 'invoice'
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;