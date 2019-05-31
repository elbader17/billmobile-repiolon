import { connect } from 'react-redux';
import SignIn from './Component';
import { signIn } from '../../../app/authentication/actions';
import { getFiscalIdentity } from '../../../app/user_service/actions';

const mapStateToProps = (state) => {
  return {
    jwtToken: state.authentication.jwtToken,
    fiscalIdentityComplete: state.userservice.completed,
    fiscalIdentity: state.userservice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    getFiscalIdentity: () => dispatch(getFiscalIdentity()),
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

export default component;
