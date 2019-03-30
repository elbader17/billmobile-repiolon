import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration';
import Loading from './Loading';
import Home from './Home';
import NewCostumer from './Costumer';
import Item from './Item';
import NewItem from './Item/NewItem';

const AppStack = createStackNavigator(
  {
    Configure: TaxConfiguration,
    HomeScreen: Home,
    NewCostumer,
    Items: Item,
    NewItems: NewItem,
  },
);

const AppLogin = createStackNavigator(
  {
    //Intro,
    Authentication,
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Loading,
    Login: AppLogin,
    App: AppStack,
  },
  {
    initialRouteName: 'Login',
  },
));

export default AppNavigator;
