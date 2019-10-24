import { connect } from 'react-redux';
import NewItem from './Component';
import { createItem } from '../../../app/items/actions';

const mapStateToProps = state => ({
  items: state.items,
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes) => (
      dispatch(createItem(attributes))
    ),
    type: 'collection'
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;
