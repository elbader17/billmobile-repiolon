import { Auth } from 'aws-amplify';
import {Alert} from 'react-native';
import {
   SET_JWT_TOKEN, 
   SHOW_CONFIRMATION_MODAL,
   HIDE_CONFIRMATION_MODAL,
} from './constants';
import { from } from 'zen-observable';


function setJwtToken(jwtToken){
  return { type: SET_JWT_TOKEN, jwtToken };
}
function showConfirmationModal(){
  return{ type: SHOW_CONFIRMATION_MODAL };
}
function hideConfirmationModal(){
  return{ type: HIDE_CONFIRMATION_MODAL };
}

const signIn = function(email, password) {
  return (dispatch) => {
    Auth.signIn(email, password)
    .then((data) => {
      const { jwtToken } = data.signInUserSession.idToken;
      dispatch(setJwtToken(jwtToken));
      Alert.alert(jwtToken);
    })
    .catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }
}


const signUp = function(password, email, attributes) {
  
  return (dispatch) => {
    Auth.signUp({password:password,username:email,attributes:attributes,validationData:[],})
    .then((data => {
      dispatch(showConfirmationModal());
    }))
    .catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }
}

const confirmCode = function(email, confirmationCode) {
  
  return (dispatch) => {
    const auth = Auth.confirmSignUp(email, confirmationCode, {})
    .then((data => {
      dispatch(hideConfirmationModal());
    }))
    .catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }
}


export { signIn, signUp, confirmCode };