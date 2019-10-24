import { connect } from 'react-redux';
import NewItem from '../../Item/NewItem/Component';
import { updateInvoiceItem } from '../../../app/invoice_items/actions';

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes) => {
      const {id, category, name, price} = attributes;
      return dispatch(updateInvoiceItem(id, {category, name, price}))
    },
    type: 'invoice'
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;