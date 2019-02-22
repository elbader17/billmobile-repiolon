import { showConfirmationModal } from '../actions'
import { setJwtToken } from '../actions'
import { hideConfirmationModal } from '../actions'
import { SET_JWT_TOKEN } from '../constants'
import { SHOW_CONFIRMATION_MODAL } from '../constants'
import { HIDE_CONFIRMATION_MODAL } from '../constants'

describe('Action Fuction Action', () => {
    it('Set Token ', () => {
      const action = setJwtToken();
      expect(action.type).toEqual(SET_JWT_TOKEN);
    });
    it('Set showConfirmationModal ', () => {
      const action = showConfirmationModal();
      expect(action.type).toEqual(SHOW_CONFIRMATION_MODAL);
    });
    it('Set hideConfirmationModal ', () => {
      const action = hideConfirmationModal();
      expect(action.type).toEqual(HIDE_CONFIRMATION_MODAL);
    });
  });
  
  