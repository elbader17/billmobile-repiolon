import { connect } from 'react-redux'
import Invoice from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  identitiFiscal: state.identitiFiscal,
  items: state.items.items,
});

function mapDispatchToProps(dispatch) {
  return {
    createInvoice: (category, name, price) => { 
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
)(Invoice);

export default component;