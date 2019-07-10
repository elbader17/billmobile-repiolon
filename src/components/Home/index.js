import { connect } from 'react-redux'
import Home from './Component';
import { listItems } from '../../app/items/actions';
import { signOut } from '../../app/authentication/actions'

const mapStateToProps = state => ({
  user: state.userservice,
  items: state.items.items,
  customers: state.customers.customers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getItemList: () => (dispatch(listItems())),
    signOut: () => dispatch(signOut()),
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default component;
