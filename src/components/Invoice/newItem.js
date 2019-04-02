import { connect } from 'react-redux';
import NewItem from '../Item/NewItem/Component';
import { createInvoiceItem } from '../../app/invoice_items/action';

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
  return {
    createItem: (category, name, price) => { 
      dispatch(createInvoiceItem(category, name, price))
        .then((data) => {
          //Alert.alert("Exito al Guardar!");
          this.props.navigation.navigate('Invoice');
        });
    },
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);

export default component;