import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration/Configure';
import Loading from './Loading';
import Home from './Home';
import NewCustomer from './NewCustomer';
import InvoiceItemList from './Invoice/ItemList';
import NewItem from './Item/NewItem';
import NewInvoiceItem from './Invoice/NewInvoiceItem';
import NewInvoiceCustomer from './Invoice/NewInvoiceCustomer';
import Invoice from './Invoice';
import ListEditableItem from './Item/ListEditableItem';
import InvoiceSummary from './Invoice/Summary';
import ConfirmationCodeRegister from './Authentication/Confirmation';

const AppStack = createStackNavigator(
  {
    HomeScreen: Home,
    Configure: TaxConfiguration,
    NewCustomer,
    InvoiceItemList,
    NewInvoiceItem,
    NewInvoiceCustomer,
    NewItems: NewItem,
    Invoice,
    ListEditableItem,
    InvoiceSummary,
  },
);

const AppLogin = createStackNavigator(
  {
    // Intro,
    Authentication,
    ConfirmationCodeRegister,
  },
  {
    headerMode: 'none',
  },
);

const Prueba = createStackNavigator(
  {
    //InvoiceSummary,
    //VerticalStackLayout,
    NewCustomer,
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
    initialRouteName: 'Login',
  },
));

export default AppNavigator;
