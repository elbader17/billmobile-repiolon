import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration/Configure/Component';
import InitialConfiguration from './TaxConfiguration/InitialConfigure/Component';
import Loading from './Loading/Component';
import Home from './Home';
import NewClient from './Client/Component';
import Item from './Item/Component';
import NewItem from './Item/NewItem/Component';
import Invoice from './Invoice/Component';

const AppStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    Client: {
      screen: NewClient,
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
    }
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
    initialRouteName: 'App',
  }
));

export default AppNavigator;