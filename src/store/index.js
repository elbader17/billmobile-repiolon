
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [
  thunk,
];

const SignIn = Sign => {
  return true;
}

export default createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

