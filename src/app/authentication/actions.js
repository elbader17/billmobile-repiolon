import { Auth } from 'aws-amplify';
import {
   SET_JWT_TOKEN, 
   SHOW_CONFIRMATION_MODAL,
} from './constants';


function setJwtToken(jwtToken){
  return { type: SET_JWT_TOKEN, jwtToken };
}
function showConfirmationModal(){
  return{ type: SHOW_CONFIRMATION_MODAL };
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


const signUp = function(password, name, attributes) {
  
  return (dispatch) => {
    Auth.signUp({password:password,username:name,attributes:attributes,validationData:[],})
    .then((data => {
      dispatch(showConfirmationModal());
    }))
    .catch(err => console.error("erroe", err.message));
  }
}

const confirmCode = function(name, confirmationCode) {
  
  return (dispatch) => {
    const auth = Auth.confirmSignUp(name, confirmationCode, {})
    .then((data => {
      dispatch(showConfirmationModal());
      dispatch(signIn(name,password));
    }))
    .catch(err => console.error("erroe", err));
  }
}


export { signIn, signUp, confirmCode };