import { connect } from 'react-redux';
import TaxConfiguration from './Component';
import { updateFiscalIdentity, saveFiscalKey, getCertificate } from '../../../app/user_service/actions';

const mapStateToProps = state => ({
  name: state.userservice.name,
  cuit: state.userservice.cuit,
  ib: state.userservice.ib,
  user: state.userservice
});

function mapDispatchToProps(dispatch) {
  return {
    updateFiscalIdentity: (name, cuit, category, ib) => dispatch(updateFiscalIdentity(name, cuit, category, ib)),
    saveFiscalKey: (key) => dispatch(saveFiscalKey(key)),
    getCertificate: (key) => dispatch(getCertificate())
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaxConfiguration);

export default component;
