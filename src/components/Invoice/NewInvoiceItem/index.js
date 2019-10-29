import { connect } from 'react-redux';
import NewItem from '../../Item/NewItem/Component';
import { createInvoiceItem } from '../../../app/invoice_items/actions';

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes) => (
      dispatch(createInvoiceItem(attributes))
    ),
    type: 'invoice'
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;