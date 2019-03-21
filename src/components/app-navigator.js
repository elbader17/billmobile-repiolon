import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration';
import Loading from './Loading/Component';

const AppStack = createStackNavigator(
  {
    Configure: TaxConfiguration,
    //HomeScreen: Home,
  }
)

const Login = createStackNavigator(
  {
    Intro,
    Authentication,
  },
  {
    headerMode: 'none',
  }
)

let AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  }
));

export default AppNavigator;