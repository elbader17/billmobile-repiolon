import { connect } from 'react-redux'
import Home from './Component';
import { listItems } from '../../app/items/actions';
import { listCustomers } from '../../app/customers/action';
import { listInvoice } from '../../app/invoices/actions';
import { signOut } from '../../app/authentication/actions'
import { setTokenDevice } from '../../app/user_service/actions';

const mapStateToProps = state => ({
  user: state.userservice,
  items: state.items.items,
  customers: state.customers.customers,
  invoices: state.invoices.invoices
});

const mapDispatchToProps = (dispatch) => {
  return {
    getItemList: () => (dispatch(listItems())),
    getCustomerList: () => (dispatch(listCustomers())),
    signOut: () => dispatch(signOut()),
    listInvoice: () => (
      dispatch(listInvoice())
    ),
    setTokenDevice: token => dispatch(setTokenDevice(token))
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default component;
