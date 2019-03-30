import {
  CONGNITO_IDENTITY_POOL_ID,
  AWS_REGION,
  USER_POOL_ID,
  USER_POOL_WEB_CLIENT_ID,
} from 'react-native-dotenv';

const config = {
  identityPoolId: CONGNITO_IDENTITY_POOL_ID,
  region: AWS_REGION,
  userPoolId: USER_POOL_ID,
  userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
};
export default config;
