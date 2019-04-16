import { connect } from 'react-redux';
import NewItem from './Component';
import { createItem } from '../../../app/items/action';

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
  return {
    createItem: (category, name, price) => {
      dispatch(createItem(category, name, price))
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
