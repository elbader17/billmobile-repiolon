import { Auth } from 'aws-amplify';
import { SET_JWT_TOKEN } from './constants';


export function signIn(email, password) {
  (dispatch) => {
    return Auth.signIn(email, password)
      .then((data) => {
        const { jwtToken } = data.signInUserSession.idToken;
        dispatch(SET_JWT_TOKEN, { jwtToken });
        console.error(jwtToken);
      }).catch((err) => {
        console.error("erroe", err)
      });
  }
}
