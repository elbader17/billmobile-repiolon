import {  combineReducers } from 'redux';
import authenticationReducer from '../app/authentication/reducer';

export default combineReducers({
  authentication: authenticationReducer,
});

