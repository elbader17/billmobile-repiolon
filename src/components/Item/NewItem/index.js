import { connect } from 'react-redux';
import NewItem from './Component';
import { createItem } from '../../../app/items/actions';

const mapStateToProps = state => ({
  items: state.items,
});

function mapDispatchToProps(dispatch) {
  return {
    createItem: (category, name, price, quantity) => {
      dispatch(createItem(category, name, price, quantity))
        .then((data) => {
          //Alert.alert("Exito al Guardar!");
          this.props.navigation.navigate('Items');
        });
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;
