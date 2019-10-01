import { connect } from 'react-redux';
import ItemList from '../../Item/List/Component';
import { listItems } from '../../../app/items/actions';
import { createInvoiceItem } from '../../../app/invoice_items/actions';

const mapStateToProps = state => ({
  items: state.items.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getItemList: () => (dispatch(listItems())),
    actionItem: (item) => dispatch(createInvoiceItem(item.attributes)),
    type: 'invoice'
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);

export default component;