import { setJwtToken } from '../reducer'
import { showConfirmationModal } from '../reducer'
import { hideConfirmationModal } from '../reducer'

describe('Action Fuction Reducer', () => {
    it('setJwtToken ', () => {
      const action = setJwtToken({draftState:{jwtToken:""},jwtToken:""});
      expect(action).toEqual({jwtToken:""});
    });
    it('showConfirmationModal ', () => {
      const action = showConfirmationModal({draftState:{jwtToken:""}});
      expect(action.showConfirmationModal).toEqual(true);
    });
    it('hideConfirmationModal ', () => {
      const action = hideConfirmationModal({draftState:{jwtToken:""}});
      expect(action.hideConfirmationModal).toEqual(false);
    });
});


  