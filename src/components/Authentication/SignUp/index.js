import { connect } from 'react-redux';
import SignUp from './Component';
import { signUp } from '../../../app/authentication/actions';

const mapDispatchToProps = dispatch => {
  return {
    signUp: (password, email, attributes) => dispatch(signUp(password, email, attributes)),
  };
}

const component = connect(
  null,
  mapDispatchToProps,
)(SignUp);

export default component;
