/* eslint-disable import/named */
import { connect } from 'react-redux';
import Client from './Component';
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
)(Client);

export default component;
