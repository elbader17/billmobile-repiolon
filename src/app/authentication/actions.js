import { Auth } from 'aws-amplify';
import { Alert } from 'react-native';
import {
  SET_JWT_TOKEN,
  SHOW_CONFIRMATION_MODAL,
  HIDE_CONFIRMATION_MODAL,
  USER_SIGNED_UP,
  USER_NOT_CONFIRMED_MESSAGE,
} from './constants';
import { getFiscalIdentity } from '../user_service/actions';

function setJwtToken(jwtToken) {
  return { type: SET_JWT_TOKEN, jwtToken };
}
function showConfirmationModal() {
  return { type: SHOW_CONFIRMATION_MODAL };
}

function userSignedUp(email, password) {
  return { type: USER_SIGNED_UP, registration: { email, password } };
}

function hideConfirmationModal() {
  return { type: HIDE_CONFIRMATION_MODAL };
}

const signIn = (email, password) => {
  return (dispatch) => {
    return Auth.signIn(email, password)
      .then((data) => {
        if (data.message === USER_NOT_CONFIRMED_MESSAGE) {
          dispatch(userSignedUp(null, password));
        } else {
          const { jwtToken } = data.signInUserSession.idToken;
          dispatch(setJwtToken(jwtToken));
          dispatch(getFiscalIdentity());
        }
      })
      .catch((err) => {
        Alert.alert('Error al Ingresar: ', err.message);
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
      .then(() => {
        dispatch(userSignedUp(email, password));
        dispatch(showConfirmationModal());
      }).catch(err => Alert.alert('Error al Registrar: ', err.message));
  };
};

const confirmCode = (email, confirmationCode) => {
  return (dispatch, getState) => {
    return Auth.confirmSignUp(email, confirmationCode, {})
      .then(() => {
        const { password } = getState().authentication.registration;
        dispatch(hideConfirmationModal());
        return dispatch(signIn(password, email));
      })
      .catch((err) => {
        Alert.alert('Error al Confirmar: ', err.message);
        this.props.navigation.navigate('ConfirmationCodeRegister');
      });
  };
};

export { signIn, signUp, confirmCode };
