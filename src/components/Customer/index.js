/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import Custumer from './Component';
import { registerFiscalIdentity } from '../../app/fiscal_identity/actions';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  name: state.identitiFiscal.name,
});

function mapDispatchToProps(dispatch) {
  return {
    registerFiscalIdentity: (name, cuit) => dispatch(registerFiscalIdentity(name, cuit)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Custumer);

export default component;
