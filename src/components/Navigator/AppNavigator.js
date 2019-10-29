import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerActions } from 'react-navigation-drawer';
//All Screens and Components
import Initializing from '../Initializing/Component';
import Intro from '../Intro';
import Authentication from '../Authentication';
import ConfirmationCodeRegister from '../Authentication/Confirmation';
import InitialCofiguration from '../TaxConfiguration/InitialConfigure/Component';
import TaxConfiguration from '../TaxConfiguration/Configure';
import HomeScreen from "../Home";
import Invoice from '../Invoice';
import InvoiceSummary from '../Invoice/Summary';
import ListInvoiceItem from '../Invoice/ListInvoiceItem';
import ListInvoiceCustomer from '../Invoice/ListInvoiceCustomer';
import NewInvoiceItem from '../Invoice/NewInvoiceItem';
import EditInvoiceItem from '../Invoice/EditInvoiceItem';
import NewInvoiceCustomer from '../Invoice/NewInvoiceCustomer';
import EditInvoiceCustomer from '../Invoice/EditInvoiceCustomer';
import NewCustomer from '../Customer/NewCustomer';
import CustomersList from '../Customer/List';
import EditCustomer from '../Customer/EditCustomer';
import NewItem from '../Item/NewItem';
import ItemsList from '../Item/List';
import EditItem from '../Item/EditItem';
import Opinion from '../Opinion';
import DrawerComponent from './Drawer';
//Utils
import { IconHome, IconInvoice, IconCustomer, IconItem } from '../../constants/icons';
import { COLORS } from '../../constants/colors';
import style from './style'; 

//Stacks
const TaxConfigurationStack = createStackNavigator({
  InitialCofiguration,
  TaxConfiguration
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const InvoiceStack = createStackNavigator({
  Invoice,
  ListInvoiceCustomer,
  ListInvoiceItem,
  EditInvoiceItem,
  EditInvoiceCustomer,
  NewInvoiceCustomer,
  NewInvoiceItem,
  InvoiceSummary
});

const CustomerStack = createStackNavigator({
  CustomersList,
  EditCustomer,
  NewCustomer
});

const ItemStack = createStackNavigator({
  ItemsList,
  EditItem,
  NewItem
});

const LoginStack = createStackNavigator({
    Authentication,
    ConfirmationCodeRegister,
  },
  { headerMode: 'none'}
);

//Bottom Tab Navigator
const MainAppNavigator = createBottomTabNavigator(
  {
    Inicio: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => <IconHome color={tintColor}/>,
      }),
    },
    Facturar: {
      screen: InvoiceStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => <IconInvoice color={tintColor}/>,
      }),
    },
    Clientes: {
      screen: CustomerStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => <IconCustomer color={tintColor}/>,
      }),
    },
    Items: {
      screen: ItemStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => <IconItem color={tintColor}/>,
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      labelStyle: style.textRegular11,
      activeTintColor: '#33ffcf',
      inactiveTintColor: COLORS.white,
      style: {
        backgroundColor: COLORS.blueMedium,
        borderTopWidth: 0
      }
    }
  },
);

//Drawer
const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: MainAppNavigator,
    }
  }, 
  { contentComponent: DrawerComponent }
);

//Drawer Navigator
const DrawerNavigator = createDrawerNavigator(
  {
    Drawer
  },
  {
    getCustomActionCreators: (route, stateKey) => ({
      toggleFilterDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
    }),
  },
);

//Switch Navigator
const AppSwitchNavigator = createSwitchNavigator(
  {
    Intro,
    Initializing,
    Configure: TaxConfigurationStack,
    Login: LoginStack,
    Home: DrawerNavigator,
    Opinion
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default AppNavigator; 