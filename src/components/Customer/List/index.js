import { connect } from 'react-redux';
import CustomerList from './Component';
import { listCustomers, deleteCustomer } from '../../../app/customers/action';

const mapStateToProps = state => ({
  customers: state.customers.customers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomerList: () => (dispatch(listCustomers())),
    actionCustomer: (customer) => {
      return (dispatch(deleteCustomer(customer.id)))
    },
    type: 'collection'
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerList);

export default component;