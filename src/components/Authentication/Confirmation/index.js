import { connect } from 'react-redux';
import Confirmation from './Component';
import { confirmCode } from '../../../app/authentication/actions';

const mapDispatchToProps = dispatch => {
  return {
    confirmCode: (confirmationEmail, confirmationCode) => dispatch(confirmCode(confirmationEmail, confirmationCode)),
  };
}

const component = connect(
  null,
  mapDispatchToProps,
)(Confirmation);

export default component;
