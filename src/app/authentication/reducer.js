import producer from 'immer';
import { 
  SET_JWT_TOKEN, 
  SHOW_CONFIRMATION_MODAL,
} from './constants';


const initialState = {
  jwtToken: '',
  showConfirmationModal:false,
};

function setJwtToken({state, jwtToken }){
  state.jwtToken = jwtToken;
  return state;
}

function  showConfirmationModal({state }){
  state.showConfirmationModal = true;
  return state;
}


export default authenticationReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_JWT_TOKEN:
        return setJwtToken({state, jwtToken: action.jwtToken });
      case SHOW_CONFIRMATION_MODAL:
        return showConfirmationModal({state})
      default:
        return draftState;
    }
  });
};
