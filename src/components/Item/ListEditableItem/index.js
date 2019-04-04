import { connect } from 'react-redux';
import ListEditableItem from './Component';

const mapStateToProps = state => ({
});

const component = connect(
  mapStateToProps,
)(ListEditableItem);

export default component;