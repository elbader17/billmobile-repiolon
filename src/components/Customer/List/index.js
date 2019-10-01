import { connect } from 'react-redux';
import CustomerList from './Component';
import { listCustomers, deleteCustomer } from '../../../app/customers/action';

const mapStateToProps = state => ({
  customers: state.customers.customers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomerList: () => (dispatch(listCustomers())),
    deleteCustomer: (id) => (dispatch(deleteCustomer(id)))
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerList);

export default component;