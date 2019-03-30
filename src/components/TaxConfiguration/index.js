import { connect } from 'react-redux';
import TaxConfiguration from './Component';
import { updateFiscalIdentity } from '../../app/user_service/action';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  name: state.userservice.name,
  cuit: state.userservice.cuit,
  keyfiscal: state.userservice.keyfiscal,
});

function mapDispatchToProps(dispatch) {
  return {
    updateFiscalIdentity: (name, cuit, clavefiscal) => dispatch(updateFiscalIdentity(name, cuit, clavefiscal)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaxConfiguration);

export default component;
