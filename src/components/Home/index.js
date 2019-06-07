import { connect } from 'react-redux'
import Home from './Component';
import { listItems } from '../../app/items/actions';

const mapStateToProps = state => ({
  user: state.userservice,
  items: state.items.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    getItemList: () => (dispatch(listItems())),
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default component;
