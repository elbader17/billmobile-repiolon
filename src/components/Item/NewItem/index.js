import { connect } from 'react-redux';
import NewItem from './Component';
import { createItem } from '../../../app/items/actions';

const mapStateToProps = state => ({
  items: state.items,
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes, navigation) => {
      dispatch(createItem(attributes))
        .then(() => {
          navigation.navigate('ItemList');
        });
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;
