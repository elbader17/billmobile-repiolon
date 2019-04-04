import { connect } from 'react-redux';
import ListEditableItem from './Component';

const mapStateToProps = state => ({
  identitiFiscal: state.identitiFiscal,
  items: state.items.items,
});

const component = connect(
  mapStateToProps,
)(ListEditableItem);

export default component;