import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration/Configure';
import InitialConfiguration from './TaxConfiguration/InitialConfigure/Component';
import Loading from './Loading';
import Home from './Home';
import Custumer from './Customer';
import Item from './Item';
import NewItem from './Item/NewItem';
import Invoice from './Invoice';

const AppStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    Custumer: {
      screen: Custumer,
    },
    Items: {
      screen: Item,
    },
    NewItems: {
      screen: NewItem,
    },
    Invoices: {
      screen: Invoice
    }
  }
);

const AppTaxConfiguration = createStackNavigator(
  {
    InitialConfigure: {
      screen: InitialConfiguration,
    },
    Configure: {
      screen: TaxConfiguration, 
    },
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
    Configuration: AppTaxConfiguration,
    App: AppStack,
  },
  {
    initialRouteName: 'Configuration',
  }
));

export default AppNavigator;