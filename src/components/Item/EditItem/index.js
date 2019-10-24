import { connect } from 'react-redux';
import NewItem from '../NewItem/Component';
import { updateItem } from '../../../app/items/actions';

const mapStateToProps = state => ({
  
});

function mapDispatchToProps(dispatch) {
  return {
    saveItem: (attributes) => (
      dispatch(updateItem(attributes))
    ),
    type: 'collection'
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;