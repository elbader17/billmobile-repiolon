import { 
  createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator 
} from 'react-navigation';
import style from '../utils/style';
import { COLORS } from '../constants/colors';

import Initializing from './Initializing/Component';
import Intro from './Intro';
import Authentication from './Authentication';
import ConfirmationCodeRegister from './Authentication/Confirmation';
import InitialCofiguration from './TaxConfiguration/InitialConfigure/Component';
import TaxConfiguration from './TaxConfiguration/Configure';
import Home from './Home';
import NewCustomer from './Customer/NewCustomer';
import EditCustomer from './Customer/EditCustomer';
import CustomerList from './Customer/List';
import NewItem from './Item/NewItem';
import EditItem from './Item/EditItem';
import ItemList from './Item/List';
import Invoice from './Invoice';
import InvoiceSummary from './Invoice/Summary';
import NewInvoiceItem from './Invoice/NewInvoiceItem';
import ListInvoiceItem from './Invoice/ListInvoiceItem';
import NewInvoiceCustomer from './Invoice/NewInvoiceCustomer';
import Opinion from './Opinion';
import ListInvoiceCustomer from './Invoice/ListInvoiceCustomer';

import Prueba from './Prueba';

const LoginStack = createStackNavigator(
  {
    Authentication,
    ConfirmationCodeRegister,
  },
  { headerMode: 'none'}
);

const TaxConfigurationStack = createStackNavigator({
  InitialConfigure: {
    screen: InitialCofiguration,
    headerMode: 'none'
  },
  TaxConfigure: {
    screen: TaxConfiguration,
    navigationOptions: () => ({
      title: 'CONFIGURACIÓN DE CUIT',
      headerTitleStyle: style.textNavigation,
      headerTintColor: COLORS.blue,
    }),
  },
});

const InvoiceStack = createStackNavigator({
  Invoice,
  NewInvoiceItem,
  NewInvoiceCustomer,
  ListInvoiceItem,
  ListInvoiceCustomer,
  InvoiceSummary: {
    screen: InvoiceSummary,
    navigationOptions: () => ({
      title: 'DOCUMENTO FINAL',
      headerTitleStyle: style.textNavigation,
      headerTintColor: COLORS.blue,
    }),
  },
});

const ItemStack = createStackNavigator({
  ItemList,
  NewItem,
  EditItem,
});

const CustomerStack = createStackNavigator({
  CustomerList,
  NewCustomer,
  EditCustomer
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Intro,
    Initializing,
    Login: LoginStack,
    Configure: TaxConfigurationStack,
    Home,
    Invoices: InvoiceStack,
    Items: ItemStack,
    Customer: CustomerStack,
    Opinion,
    Prueba
  },
  {
    initialRouteName: 'Items',
  }
);

const AppNavigator = createAppContainer(
  AppSwitchNavigator
);

export default AppNavigator;
