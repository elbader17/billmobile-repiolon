import producer from 'immer';
import {
  SET_JWT_TOKEN,
  SHOW_CONFIRMATION_MODAL,
  HIDE_CONFIRMATION_MODAL,
  USER_SIGNED_UP,
} from './constants';

const initialState = {
  jwtToken: '',
  showConfirmationModal: false,
  registration: '',
};

function setJwtToken({ draftState, jwtToken }) {
  draftState.jwtToken = jwtToken;
  return draftState;
}

function showConfirmationModal({ draftState }) {
  draftState.showConfirmationModal = true;
  return draftState;
}

function hideConfirmationModal({ draftState }) {
  draftState.showConfirmationModal = false;
  draftState.registration = null;
  return draftState;
}

function setRegistration({ draftState, registration }) {
  draftState.registration = registration;
  return draftState;
}

export default (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case SET_JWT_TOKEN:
        return setJwtToken({ draftState, jwtToken: action.jwtToken });
      case SHOW_CONFIRMATION_MODAL:
        return showConfirmationModal({ draftState });
      case HIDE_CONFIRMATION_MODAL:
        return hideConfirmationModal({ draftState });
      case USER_SIGNED_UP:
        return setRegistration({ draftState, registration: action.registration });
      default:
        return draftState;
    }
  });
};
