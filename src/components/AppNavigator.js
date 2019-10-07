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
import ListInvoiceItem from './Invoice/ListInvoiceItem';
import ListInvoiceCustomer from './Invoice/ListInvoiceCustomer';
import NewInvoiceItem from './Invoice/NewInvoiceItem';
import NewInvoiceCustomer from './Invoice/NewInvoiceCustomer';
import Opinion from './Opinion';

const LoginStack = createStackNavigator(
  {
    Authentication,
    ConfirmationCodeRegister,
  },
  { headerMode: 'none'}
);

const TaxConfigurationStack = createStackNavigator({
  InitialCofiguration,
  TaxConfiguration,
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
  EditItem
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
    Opinion
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(
  AppSwitchNavigator
);

export default AppNavigator;
