import { connect } from 'react-redux';
import NewItem from './Component';
import { registerItemProduct, registerItemService } from '../../../app/items/action';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  name: state.addItem.name,
});

function mapDispatchToProps(dispatch) {
  return {
    registerItemProduct: (name, price, jwtToken) => dispatch(registerItemProduct(name, price, jwtToken)),
    registerItemService: (name, price, unit, jwtToken) => dispatch(registerItemService(name, price, unit, jwtToken)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;
