import { connect } from 'react-redux';
import ListInvoiceItem from './Component';
import { listItems } from '../../../app/items/actions';
import { createInvoiceItem } from '../../../app/invoice_items/actions';

const mapStateToProps = state => ({
  items: state.items.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getItemList: () => (dispatch(listItems())),
    saveItemInvoice: (attributes) => dispatch(createInvoiceItem(attributes.category, attributes.name, attributes.price)),
    saveItem: (attributes, navigation) => {
      dispatch(updateItem(attributes))
        .then(() => {
          navigation.navigate('ListInvoiceItem');
        });
    },
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListInvoiceItem);

export default component;