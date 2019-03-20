import {  combineReducers } from 'redux';
import authenticationReducer from '../app/authentication/reducer';
import userserviceReducer from '../app/userservice/reducer';

export default combineReducers({
  authentication: authenticationReducer,
  userservice: userserviceReducer,
});

