import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration/Configure';
import NewCustomer from './NewCustomer';
import NewItem from './Item/NewItem';
import NewInvoiceItem from './Invoice/NewInvoiceItem';
import NewInvoiceCustomer from './Invoice/NewInvoiceCustomer';
import Invoice from './Invoice';
import InvoiceSummary from './Invoice/Summary';
import ConfirmationCodeRegister from './Authentication/Confirmation';
import Opinion from './Opinion';

const AppStack = createStackNavigator(
  {
    Invoice,
    NewCustomer,
    NewInvoiceItem,
    NewInvoiceCustomer,
    NewItems: NewItem,
    InvoiceSummary,
  },
);

const AppTaxConfiguration = createStackNavigator(
  {
    TaxConfiguration,
  },
);

const AppLogin = createStackNavigator(
  {
    Authentication,
    ConfirmationCodeRegister,
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Intro,
    Login: AppLogin,
    Configure: AppTaxConfiguration,
    App: AppStack,
    Opinion
  },
  {
    initialRouteName: 'Intro',
  },
));

export default AppNavigator;
