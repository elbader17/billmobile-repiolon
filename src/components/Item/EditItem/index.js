import { connect } from 'react-redux';
import NewItem from '../NewItem/Component';
import { updateItem } from '../../../app/items/actions';

const mapStateToProps = state => ({
  
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes, navigation, type) => {
      dispatch(updateItem(attributes))
        .then(() => {
          if (type === 'collection') navigation.navigate('ItemList');
          else navigation.navigate('ListInvoiceItem');
      })
    }
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;