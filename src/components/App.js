import * as React from 'react';
import { StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from '../store/index';
import Amplify from 'aws-amplify';
import axios from 'axios';
//import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { API_HOST } from 'react-native-dotenv';
import FlashMessage from "react-native-flash-message";
import { PersistGate } from 'redux-persist/integration/react';
import aws_exports from '../constants/aws-exports';
import AppNavigator from './AppNavigator';
import { getAuthToken, refreshToken, error } from '../utils/interceptors';
import NavigationService from './NavigationService';

Amplify.configure(aws_exports);

axios.defaults.baseURL = API_HOST;
axios.interceptors.request.use(getAuthToken(store));
axios.interceptors.response.use(undefined, err => {error(err)});

/*
options = {
  statusCodes: [ 500 ]
}
createAuthRefreshInterceptor(axios, refreshToken, options);
*/

class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate 
          persistor={persistor}>   
          <AppNavigator 
            ref={ navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef)} }  
          />
        </PersistGate>
        <FlashMessage position="top" animated={true} />
      </Provider>
    );
  }
}

export default App;