import { connect } from 'react-redux';
import Confirmation from './Component';
import { confirmCode } from '../../../app/authentication/actions';

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  return {
    confirmCode: (email, confirmationCode) => dispatch(confirmCode(email, confirmationCode)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation);

export default component;
