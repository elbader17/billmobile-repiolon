import { Auth } from 'aws-amplify';
import { showMessage } from "react-native-flash-message";
import { messageErrorRegister } from '../../utils/messagesNotifications';
import { getFiscalIdentity } from '../user_service/actions';
import {
  SET_JWT_TOKEN,
  USER_SIGNED_UP,
  USER_NOT_CONFIRMED_MESSAGE,
} from './constants';

const setJwtToken = jwtToken => {
  return { type: SET_JWT_TOKEN, jwtToken };
}

const userSignedUp = (email, password) => {
  return { type: USER_SIGNED_UP, registration: { email, password } };
}

const signIn = (email, password) => {
  return (dispatch) => {
    return Auth.signIn(email, password)
      .then((data) => {
        if (data.message === USER_NOT_CONFIRMED_MESSAGE) {
          dispatch(userSignedUp(email, password));
        } else {
          const { jwtToken } = data.signInUserSession.idToken;
          dispatch(setJwtToken(jwtToken));
          return dispatch(getFiscalIdentity());
        }
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
        if (data.userConfirmed)
          return dispatch(userSignedUp(email, password));
        else
          return data.userConfirmed;
      })
      .catch(err => showMessage(messageErrorRegister));
  };
};

const confirmCode = (confirmationEmail, confirmationCode) => {
  return () => {
    return Auth.confirmSignUp(confirmationEmail, confirmationCode, {})
      .then(() => true)
      .catch(() => false);
  }
};

export { signIn, signUp, confirmCode };
