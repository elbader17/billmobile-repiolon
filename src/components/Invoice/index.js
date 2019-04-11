import { connect } from 'react-redux'
import Invoice from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.invoices.currentInvoice.fiscalIdentity,
  items: state.invoices.currentInvoice.invoiceItems,
});

function mapDispatchToProps(dispatch) {
  return {
    createInvoice: (category, name, price) => { 
      dispatch(createItem(category, name, price))
        .then((data) => {
          //Alert.alert("Exito al Guardar!");
          this.props.navigation.navigate('InvoiceItemList');
        });
    },
  };
}

const component = connect(
  mapStateToProps,
)(Invoice);

export default component;