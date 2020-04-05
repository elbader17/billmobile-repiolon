import { Auth } from 'aws-amplify';
import { getFiscalIdentity, setFiscalIdentity, getCertificate } from '../user_service/actions';
import {
  SET_JWT_TOKEN,
  USER_SIGNED_UP,
  USER_NOT_CONFIRMED_MESSAGE,
} from './constants';

const setJwtToken = jwtToken => {
  return { type: SET_JWT_TOKEN, jwtToken };
}

const userSignedUp = (email, password, phone) => {
  return { type: USER_SIGNED_UP, registration: { email, password } };
}

const signIn = (email, password) => {
  return (dispatch) => {
    return Auth.signIn(email, password)
      .then((data) => {
        console.log('Sign In', data);
        if (data.message === USER_NOT_CONFIRMED_MESSAGE) {
          dispatch(userSignedUp(email, password));
        } else {
          const { jwtToken } = data.signInUserSession.idToken;
          dispatch(setJwtToken(jwtToken));
          dispatch(getCertificate())
          return dispatch(getFiscalIdentity());
        }
      })
      .catch((err) => {
        return err;
      });
  };
};

const signOut = () => {
  return (dispatch) => {
    return Auth.signOut()
      .then(() => {
        dispatch(setFiscalIdentity())
        return dispatch(setJwtToken(''));
      })
      .catch((err) => {
        return err;
      });
  };
};

const signUp = (password, email, attributes) => {
  return (dispatch) => {
    return Auth.signUp({
      username: email,
      password,
      attributes,
      validationData: [],
    })
      .then((data) => {
        console.log(data)
        if (data.userConfirmed)
          return dispatch(userSignedUp(email, password));
        else {
          return data.userConfirmed;
        }
      })
      .catch((err) => {
        return err;
      });
  };
};

const confirmCode = (confirmationEmail, confirmationCode) => {
  return () => {
    return Auth.confirmSignUp(confirmationEmail, confirmationCode, {})
      .then(() => true)
      .catch(() => false);
  }
};

export { signIn, signOut, signUp, confirmCode };
