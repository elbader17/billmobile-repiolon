import { API_HOST } from 'react-native-dotenv';
import { Auth } from 'aws-amplify';
import NavigationService from '../components/NavigationService';
import { store } from '../store/index';

function saveNewToken(newToken) {
  const jwtToken = newToken;
  store.dispatch({ type: 'SET_JWT_TOKEN', jwtToken });
}

function unauthenticatedCallback() {
  NavigationService.navigate('Login');
}

export const refreshToken = async () => {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = await Auth.currentSession();
      return new Promise((resolve) => {
        cognitoUser.refreshSession(currentSession.refreshToken, (err, session) => {
          if (err) resolve(err);
          const { idToken } = session;
          saveNewToken(idToken.jwtToken);
          resolve();
        }); 
      });
    } catch (e) {
        console.log('Unable to RefreshToken', e);
    }
}

export function fetch_api(url, method, retry, data) {
  const config = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'JWT-TOKEN': store.getState().authentication.jwtToken,
      'Content-Type': 'application/json'
    }
  }
  return new Promise( function (resolve, reject) {
    fetch(API_HOST+url, config)
      .then(async (response) => {
        if (response.status === 500 && !retry) {
          await refreshToken();
          return fetch_api(url, method, true);
        } else if(response.status === 500 && retry) {
            unauthenticatedCallback();
            reject({error: 'Error to RefreshToken'});
          }
          else return response.json()
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
      .catch(error => console.log(error))
  })
}