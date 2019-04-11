import { connect } from 'react-redux';
import ItemList from './Component';

const mapStateToProps = state => ({
  items: state.invoices.currentInvoice.invoiceItems,
});

const component = connect(
  mapStateToProps,
)(ItemList);

export default component;
