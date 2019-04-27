import * as React from 'react';
import { StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';
import Amplify from 'aws-amplify';
import axios from 'axios';
import {
  API_HOST,
} from 'react-native-dotenv';
import aws_exports from '../constants/aws-exports';
import AppNavigator from './AppNavigator';

Amplify.configure(aws_exports);

axios.defaults.baseURL = API_HOST;

class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;

