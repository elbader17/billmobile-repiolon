import { connect } from 'react-redux';
import NewItem from '../../Item/NewItem/Component';
import { createInvoiceItem } from '../../../app/invoice_items/actions';

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes, navigation) => {
      dispatch(createInvoiceItem(attributes.category, attributes.name, attributes.price))
        .then(() => {
          navigation.navigate('Invoice');
        });
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;
