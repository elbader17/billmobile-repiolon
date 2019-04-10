import { connect } from 'react-redux';
import InvoiceSummary from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  identitiFiscal: state.identitiFiscal,
  items: state.items.items,
});


const component = connect(
  mapStateToProps,
)(InvoiceSummary);

export default component;