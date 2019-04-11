import { connect } from 'react-redux';
import ListEditableItem from './Component';

const mapStateToProps = state => ({
  fiscalIdentity: state.fiscalIdentity,
  items: state.items.items,
});

const component = connect(
  mapStateToProps,
)(ListEditableItem);

export default component;