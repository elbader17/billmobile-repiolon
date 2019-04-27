import { connect } from 'react-redux'
import SignUp from './Component';
import { signUp } from '../../../app/authentication/actions';
import { confirmCode } from '../../../app/authentication/actions';

const mapStateToProps = state => ({
  showConfirmationModal: state.authentication.showConfirmationModal,
});

function mapDispatchToProps(dispatch) {
  return {
    signUp: (password, name,attributes) => dispatch(signUp(password, name, attributes)),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

export default component;
