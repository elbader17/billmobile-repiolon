import { connect } from 'react-redux';
import NewItem from '../../Item/NewItem/Component';
import { updateInvoiceItem } from '../../../app/invoice_items/actions';

const mapStateToProps = state => ({
  items: state.invoices.currentInvoice.invoiceItems,
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes) => {
      const {id, category, name, price, quantity, dateFrom, dateTo, paymentExpiration} = attributes;
      return dispatch(updateInvoiceItem(id, {category, name, price}, quantity, dateFrom, dateTo, paymentExpiration))
    },
    type: 'invoice'
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;