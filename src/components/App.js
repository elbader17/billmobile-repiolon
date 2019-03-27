import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Amplify from 'aws-amplify';
import axios from 'axios';
import aws_exports from '../aws-exports';
import AppNavigator from './app-navigator';
Amplify.configure(aws_exports);
/*
axios.setHost = 
axios.setHeader = { "JWT-TOKEN" : store.getState.authetication.jwtToken };
*/


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
