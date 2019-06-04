import { connect } from 'react-redux';
import NewItem from '../NewItem/Component';
import { updateItem, listItems } from '../../../app/items/actions';

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes, navigation) => {
      dispatch(updateItem(attributes))
        .then(() => {
          dispatch(listItems())
            .then(() => {
              navigation.navigate('ItemList');
            })
        });
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;