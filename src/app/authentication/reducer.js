import producer from 'immer';
import {
  SET_JWT_TOKEN,
  SHOW_CONFIRMATION_MODAL,
  HIDE_CONFIRMATION_MODAL,
} from './constants';


const initialState = {
  jwtToken: '',
  showConfirmationModal: false,
};

function setJwtToken({draftState, jwtToken }){
  draftState.jwtToken = jwtToken;
  return draftState;
}

function showConfirmationModal({draftState }){
  draftState.showConfirmationModal = true;
  return draftState;
}

function hideConfirmationModal({draftState }){
  draftState.hideConfirmationModal = false;
  return draftState;
}

function toggleConfirmationModal({draftState }){
  draftState.showConfirmationModal = !draftState.showConfirmationModal;
  return draftState;
}


export default authenticationReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_JWT_TOKEN:
        return setJwtToken({draftState, jwtToken: action.jwtToken });
      case SHOW_CONFIRMATION_MODAL:
        return showConfirmationModal({draftState})
      case HIDE_CONFIRMATION_MODAL:
        return hideConfirmationModal({draftState})
      default:
        return draftState;
    }
  });
};
