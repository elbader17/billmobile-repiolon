import { connect } from 'react-redux';
import TaxConfiguration from './Component';
import { updateFiscalIdentity, getCertificate, uploadCertificate } from '../../../app/user_service/actions';

const mapStateToProps = state => ({
  name: state.userservice.name,
  cuit: state.userservice.cuit,
});

function mapDispatchToProps(dispatch) {
  return {
    updateFiscalIdentity: (name, cuit) => dispatch(updateFiscalIdentity(name, cuit)),
    getCertificate: () => dispatch(getCertificate()),
    updateCertificate: (pkey, cert) => dispatch(uploadCertificate(pkey, cert))
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaxConfiguration);

export default component;
