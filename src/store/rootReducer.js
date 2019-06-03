import { combineReducers } from 'redux';
import authenticationReducer from '../app/authentication/reducers';
import userserviceReducer from '../app/user_service/reducer';
import fiscalIdentityReducer from '../app/fiscal_identity/reducers';
import invoicesReducer from '../app/invoices/reducers';
import itemsReducer from '../app/items/reducers';
import customersReducer from '../app/customers/reducer';

export default combineReducers({
  authentication: authenticationReducer,
  userservice: userserviceReducer,
  fiscalIdentity: fiscalIdentityReducer,
  invoices: invoicesReducer,
  items: itemsReducer,
  customers: customersReducer,
});
