import { Auth } from 'aws-amplify';
import { Alert } from 'react-native';
import {
  SET_JWT_TOKEN,
  SHOW_CONFIRMATION_MODAL,
  HIDE_CONFIRMATION_MODAL,
} from './constants';

function setJwtToken(jwtToken) {
  return { type: SET_JWT_TOKEN, jwtToken };
}
function showConfirmationModal() {
  return { type: SHOW_CONFIRMATION_MODAL };
}
function hideConfirmationModal() {
  return { type: HIDE_CONFIRMATION_MODAL };
}

const signIn = function(email, password) {
  return (dispatch) => {
    return Auth.signIn(email, password)
    .then((data) => {
      const { jwtToken } = data.signInUserSession.idToken;
      dispatch(setJwtToken(jwtToken));
      return jwtToken;
    })
  }
}

const signUp = function(password, email, attributes) {
  return (dispatch) => {
    Auth.signUp({
      username:email,
      password:password,
      attributes:attributes,
      validationData: [],
    }).then((data) => {
      dispatch(showConfirmationModal());
    })
    .catch(err => Alert.alert("Error al Registrar: ",err.message));
  }
}

const confirmCode = function(email, confirmationCode) {
  return (dispatch) => {
    Auth.confirmSignUp(email, confirmationCode, {})
    .then((_data) => {
      dispatch(hideConfirmationModal());
    })
    .catch(err => Alert.alert("Error al Confirmar: ",err.message));
  }
}

export { signIn, signUp, confirmCode };
