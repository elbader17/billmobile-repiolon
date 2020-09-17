import { connect } from 'react-redux';
import CustomerList from '../../Customer/List/Component';
import { listCustomers } from '../../../app/customers/action';
import { addFiscalIdentityToInvoice } from '../../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  customers: state.customers.customers
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomerList: () => (dispatch(listCustomers())),
    actionCustomer: (customer) => {
      const { name, category, identification } = customer.attributes;
      const { id } = customer;
      return dispatch(addFiscalIdentityToInvoice(name, identification, category, id))
    },
    type: 'invoice' //Use component CustomerList for invoices
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerList);

export default component;