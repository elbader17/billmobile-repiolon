import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration/Configure';
import Loading from './Loading';
import Home from './Home';
import NewCostumer from './Costumer';
import Item from './Item';
import NewItem from './Item/NewItem';
import Invoice from './Invoice';
import ListEditableItem from './Item/ListEditableItem'

const AppStack = createStackNavigator(
  {
    Configure: TaxConfiguration,
    HomeScreen: Home,
    NewCostumer,
    Items: Item,
    NewItems: NewItem,
    Invoice,
    ListEditableItem,
  },
);

const AppLogin = createStackNavigator(
  {
    Intro,
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