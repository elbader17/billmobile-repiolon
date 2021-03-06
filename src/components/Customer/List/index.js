import { connect } from 'react-redux';
import CustomerList from './Component';
import { listCustomers, deleteCustomer } from '../../../app/customers/action';

const mapStateToProps = state => ({
  customers: state.customers.customers,
  user: state.userservice,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomerList: () => (dispatch(listCustomers())),
    actionCustomer: (customer) => dispatch(deleteCustomer(customer.id)),
    type: 'collection'
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerList);

export default component;