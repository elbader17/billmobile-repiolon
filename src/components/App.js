import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import AppNavigator from './app-navigator';
Amplify.configure(aws_exports);

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
