import {  combineReducers } from 'redux';
import authenticationReducer from '../app/authentication/reducer';
import userserviceReducer from '../app/userservice/reducer';
import identitiFiscalReducer from '../app/identitifiscal/reducer';
import addItemReducer from '../app/items/reducer';

export default combineReducers({
  authentication: authenticationReducer,
  userservice: userserviceReducer,
  identitiFiscal: identitiFiscalReducer,
  addItem: addItemReducer,
});
