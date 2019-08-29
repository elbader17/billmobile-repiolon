import { store } from '../store/index';
import axios from 'axios';
import NavigationService from '../components/NavigationService';
import { Auth } from 'aws-amplify';
import { API_HOST } from 'react-native-dotenv';

const tokenOld = "eyJraWQiOiJFRmQ4R2oydFc4dmloRkg1STZxSFpydnRlazUxNmxYM1wvVENseTBOblRTUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwN2RiM2UxOS0xMGI5LTQ3NzAtODczMi02ZTNkNTJkY2VkOWEiLCJhdWQiOiIzZTlsZXFudjhuMWxpYnVncjFxaXBmcWc0OSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjM2MTVhNTFjLWQyNmYtNDEzNS1iYzNkLTliYmIwMTVhOTA4ZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTY0NTk1ODc4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9Rd3ZRdVNwUEIiLCJuYW1lIjoiaGgiLCJjb2duaXRvOnVzZXJuYW1lIjoiMDdkYjNlMTktMTBiOS00NzcwLTg3MzItNmUzZDUyZGNlZDlhIiwiZXhwIjoxNTY0NTk5NDgxLCJpYXQiOjE1NjQ1OTU4ODEsImVtYWlsIjoiaGhAbW96ZWouY29tIn0.GS8ZFhMytUi_PkSBsNFOmkN0_Sr_dxzFjjrENsR4G7nvYHLjDTxvp0dsVbGjg4ry5o4yTEQ-mzYA9_D9RgpHime8wmsAMjRkFNglxkejDW0uvYIFpkF1_FhwkaQyEChXH_ZVWCiP8bmpCZHzcM2YTHnmrOYsOKz406_VV8L8Jp-PBL6Aku1ZtAF9nQR2sFgnwCDT05yQWdFKwKybIzx0G8C0J0AhnTbLcFMM2XdrqEbM2_I7GBY6LBb9k9_f3hN7tciTjwVigZcBY0kLAxKX1g9Tvk2-SZZE_YqaHv5KFAxLMypQiuhQwANjsWeAGdVgynMDn026kCULFQ6yIBKGEA";
const tokenNew = "eyJraWQiOiJFRmQ4R2oydFc4dmloRkg1STZxSFpydnRlazUxNmxYM1wvVENseTBOblRTUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwN2RiM2UxOS0xMGI5LTQ3NzAtODczMi02ZTNkNTJkY2VkOWEiLCJhdWQiOiIzZTlsZXFudjhuMWxpYnVncjFxaXBmcWc0OSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjIzMDFhYTM2LWMzNzEtNDZiOC05MDdiLTllZDU2MjYwYmRmYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTY1ODk1NjI0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9Rd3ZRdVNwUEIiLCJuYW1lIjoiaGgiLCJjb2duaXRvOnVzZXJuYW1lIjoiMDdkYjNlMTktMTBiOS00NzcwLTg3MzItNmUzZDUyZGNlZDlhIiwiZXhwIjoxNTY1OTAzNDM1LCJpYXQiOjE1NjU4OTk4MzUsImVtYWlsIjoiaGhAbW96ZWouY29tIn0.bBSRc8IwWFmE2WL2P7EXgvPz9NPtPC_W4DKLzeVKe3pYj8iZXL2QzBxJaBj4-By8gY5pAavanbMpr1Vd9B_U3tV1MVoJfZeb8h6ndmE7QSk_2jdPOCg4amvWU1veazaBC3FQxR3KYjn03iXaHDfu3sLY1YT1fJ-N_ZYIekCcfokydzPVIn7nQfgAQyvxRAJxGiAqs6DonP4ecW_RYJHUG0ZCTPeYvqvq55Hb7S4_f_pTE1xXrH04D59NAJ4-vZzhmONzZ4vEbI9WbHT3dswOgErW_b095osBXOF_nV93Tj2t3KfsLMwHAZUrBK7fFN2zxsswzEBALI4W7vLXCNHNpQ";

var token = tokenOld;
var bool = false;

//Configure request with token
export function getAuthToken(storeContainer) { 
    return config => {
        config.url = "v1/items";
        config.headers['JWT-TOKEN'] = token;
        config.__isRetryRequest = bool;
        console.log(config);
        return config;
    };
}

export function error (err) {
    const originalRequest = err.config;
    return new Promise(function (resolve) {
        if (originalRequest.__isRetryRequest) {
            console.log('Logout');
            bool = false;
            unauthenticatedCallback();
        } else if (err.response.status === 500 ) {
            if(originalRequest.headers['JWT-TOKEN']) {
                token = tokenNew;
                bool = true;
                resolve(axios.request(originalRequest));
                /*refreshToken()
                  .then(()=>{
                    //saveNewToken(idToken.jwtToken);
                    bool = true;
                    token = idToken;
                    console.log('Retry');
                    resolve(axios(originalRequest));
                  })
                  .catch((e)=> {
                      console.log('Error Refresh', e);
                  })*/
            } else {
                unauthenticatedCallback();
            }
        }
    });
}

export const refreshToken = async () => {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = await Auth.currentSession();
      debugger; 
      return new Promise((resolve) => {
        cognitoUser.refreshSession(currentSession.refreshToken, (err, session) => {
          if (err) resolve(console.log('Error to RefreshToken'));
          const { idToken } = session;
          //token = idToken.jwtToken;
          resolve(idToken.jwtToken);
        }); 
      });
    } catch (e) {
        console.log('Unable to RefreshToken', e);
    }
}

function unauthenticatedCallback() {
    NavigationService.navigate('Login');
}

function saveNewToken(newToken) {
    const jwtToken = newToken;
    store.dispatch({ type: 'SET_JWT_TOKEN', jwtToken });
}

/*
export default buildInterceprtors = (unauthenticatedCallback) => {
    axios.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
            if (err.config.__isRetryRequest) {
                unauthenticatedCallback();
            } else if (err.status === 401 && err.config) {
                if(err.config.headers['JWT-TOKEN']) {
                    err.config.__isRetryRequest = true;
                    refreshToken(err.config.headers['JWT-TOKEN'])
                      .then(() => {
                        err.config.headers['JWT-TOKEN'] = newToken;
                        axios(err.config).then(resolve, reject);
                    });
                } else {
                    unauthenticatedCallback();
                }
            }
        });
    });
}
*/