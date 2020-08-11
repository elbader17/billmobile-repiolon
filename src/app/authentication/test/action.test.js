import { Auth } from 'aws-amplify';
import * as actions from '../actions';
import {
  SET_JWT_TOKEN,
  USER_SIGNED_UP,
} from '../constants';

describe('Actions', () => {
  describe('actions.signIn', () => {
    const email = 'email';
    const password = 'password';
    const jwtToken = 'jwtToken';
    const data = {
      signInUserSession: {
        idToken: {
          jwtToken,
        },
      },
    };
    let store;

    beforeEach(async () => {
      const mockFn = jest.fn();
      store = mockStore();
      mockFn.mockReturnValue(Promise.resolve(data));
      Auth.signIn = mockFn;
      await store.dispatch(actions.signIn(email, password));
    });

    it('should call Auth.signIn with email and password', () => {
      expect(Auth.signIn).toBeCalledWith(email, password);
    });

    it('the action.type should be SET_JWT_TOKEN', () => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(SET_JWT_TOKEN);
    });

    it('the action.jwtToken should be set', () => {
      const actions = store.getActions();
      expect(actions[0].jwtToken).toEqual(jwtToken);
    });
  });

  describe('actions.signUp', () => {
    const email = 'email';
    const password = 'password';
    const attributes = {
       attr: 'attr',
    };
    const data = {
      signInUserSession: {},
      userConfirmed: true,
    };
    let store;

    beforeEach(async () =>{
      const mockFn = jest.fn();
      store = mockStore();
      mockFn.mockReturnValue(Promise.resolve(data));
      Auth.signUp = mockFn;
      await store.dispatch(actions.signUp(password, email, attributes));
    });

    it('should call Auth.signUp with email, password, attributes', () => {
      expect(Auth.signUp).toBeCalledWith({
        username:email,
        password:password,
        attributes:attributes,
        validationData: [],
      });
    });

    it('the action.type should be USER_SIGNED_UP', () => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(USER_SIGNED_UP);
    });
  });
});