import { connect } from 'react-redux';
import NewItem from '../../Item/NewItem/Component';
import { createInvoiceItem } from '../../../app/invoice_items/action';

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
  return {
    createItem: (category, name, price, navigation) => {
      dispatch(createInvoiceItem(category, name, price))
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
