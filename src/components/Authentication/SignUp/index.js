import { connect } from 'react-redux';
import SignUp from './Component';
import { signUp } from '../../../app/authentication/actions';

const mapDispatchToProps = dispatch => {
  return {
    signUp: (password, name,attributes) => dispatch(signUp(password, name, attributes)),
  };
}

const component = connect(
  null,
  mapDispatchToProps,
)(SignUp);

export default component;
