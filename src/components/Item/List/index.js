import { connect } from 'react-redux';
import ListItem from './Component';
import { listItems } from '../../../app/items/actions';

const mapStateToProps = state => ({
  items: state.items.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getItemList: () => (dispatch(listItems())),
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListItem);

export default component;