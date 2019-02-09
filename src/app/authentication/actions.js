import { Auth } from 'aws-amplify';
import { SET_JWT_TOKEN } from './constants';


const signIn = function(email, password) {
  return (dispatch) => {
    const a = Auth.signIn(email, password)
    .then((data) => {
      const { jwtToken } = data.signInUserSession.idToken;
      dispatch(SET_JWT_TOKEN, { jwtToken });
      console.error(jwtToken);
    });
    return Promise.resolve(
      a
    );
  }
}

export { signIn };