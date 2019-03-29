/* eslint-disable import/named */
import { connect } from 'react-redux';
import Costumer from './Component';
import { registerFiscalIdentiti } from '../../app/identitifiscal/actions';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
});

function mapDispatchToProps(dispatch) {
  return {
    registerFiscalIdentiti: (category, name, cuit) => dispatch(registerFiscalIdentiti(category, name, cuit)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Costumer);

export default component;
