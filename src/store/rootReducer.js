import {  combineReducers } from 'redux';
import authenticationReducer from '../app/authentication/reducer';
import userserviceReducer from '../app/user_service/reducer';
import identitiFiscalReducer from '../app/fiscal_identity/reducer';
import invoicesReducer from '../app/invoices/reducer';
import itemsReducer from '../app/items/reducer';


export default combineReducers({
  authentication: authenticationReducer,
  userservice: userserviceReducer,
  identitiFiscal: identitiFiscalReducer,
  invoices: invoicesReducer,
  items: itemsReducer,
});

