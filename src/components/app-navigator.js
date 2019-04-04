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

const AppStack = createStackNavigator(
  {
    Configure: TaxConfiguration,
    HomeScreen: Home,
    NewCostumer,
    Items: Item,
    NewItems: NewItem,
    Invoice,
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
const Prueba = createStackNavigator(
  {
    Item
  },
);

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Loading,
    Login: AppLogin,
    App: AppStack,
    Prueba,
  },
  {
    initialRouteName: 'Prueba',
  },
));

export default AppNavigator;