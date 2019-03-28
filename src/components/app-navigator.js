import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration';
import Loading from './Loading';
import Home from './Home';
import NewClient from './Client';
import Item from './Item';
import NewItem from './Item/NewItem';

const AppStack = createStackNavigator(
  {
    Configure: TaxConfiguration,
    HomeScreen: Home,
    Client: NewClient,
    Items: Item,
    NewItems: NewItem,
  }
)

const AppLogin = createStackNavigator(
  {
    //Intro,
    Authentication,
  },
  {
    headerMode: 'none',
  }
)

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Loading: Loading,
    Login: AppLogin,
    App: AppStack,
  },
  {
    initialRouteName: 'Login',
  }
));

export default AppNavigator;