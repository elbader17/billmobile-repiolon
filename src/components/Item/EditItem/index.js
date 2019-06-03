import { connect } from 'react-redux';
import NewItem from '../NewItem/Component';
import { updateItem } from '../../../app/items/actions';

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes, navigation) => {
      console.log(attributes);
      dispatch(updateItem(attributes))
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