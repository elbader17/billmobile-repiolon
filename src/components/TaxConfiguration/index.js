import { connect } from 'react-redux'
import TaxConfiguration from './component';
import { registerUserService } from '../../app/userservice/action';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  name: state.userservice.name,
  cuit: state.userservice.cuit,
  keyfiscal: state.userservice.keyfiscal,
});

function mapDispatchToProps(dispatch) {
  return {
    registerUserService: (name, cuit, clavefiscal) => dispatch(registerUserService(name, cuit, clavefiscal)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaxConfiguration);

export default component;
