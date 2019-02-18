import { Auth } from 'aws-amplify';
import {
   SET_JWT_TOKEN, 
   SHOW_CONFIRMATION_MODAL,
   HIDE_CONFIRMATION_MODAL,
} from './constants';


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
    });
    return {};
  }
}


const signUp = function(password, email, attributes) {
  
  return (dispatch) => {
    Auth.signUp({password:password,username:email,attributes:attributes,validationData:[],})
    .then((data => {
      dispatch(showConfirmationModal());
    }))
    .catch(err => console.error("erroe", err.message));
  }
}

const confirmCode = function(email, confirmationCode) {
  
  return (dispatch) => {
    const auth = Auth.confirmSignUp(email, confirmationCode, {})
    .then((data => {
      dispatch(hideConfirmationModal());
    }))
    .catch(err => console.error("erroe", err));
  }
}


export { signIn, signUp, confirmCode };