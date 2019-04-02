import { connect } from 'react-redux';
import Item from './Component';
import { listItems } from '../../app/items/reducer';

const mapStateToProps = state => ({
  items: state.items.items,
});

function mapDispatchToProps(dispatch) {
  return {
    listItems: () => dispatch(listItems()),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);

export default component;