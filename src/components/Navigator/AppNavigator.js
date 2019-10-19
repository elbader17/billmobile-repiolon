import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import { 
  //createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator, 
  //createBottomTabNavigator,
  //createDrawerNavigator
} from 'react-navigation';
//All Screens and Components
import Initializing from '../Initializing/Component';
import Intro from '../Intro';
import Authentication from '../Authentication';
import ConfirmationCodeRegister from '../Authentication/Confirmation';
import InitialCofiguration from '../TaxConfiguration/InitialConfigure/Component';
import TaxConfiguration from '../TaxConfiguration/Configure';
import Invoice from '../Invoice';
import InvoiceSummary from '../Invoice/Summary';
import ListInvoiceItem from '../Invoice/ListInvoiceItem';
import ListInvoiceCustomer from '../Invoice/ListInvoiceCustomer';
import NewInvoiceItem from '../Invoice/NewInvoiceItem';
import NewInvoiceCustomer from '../Invoice/NewInvoiceCustomer';
import Opinion from '../Opinion';
import HomeScreen from "../Home";
import NewCustomer from '../Customer/NewCustomer';
import CustomersList from '../Customer/List';
import EditCustomer from '../Customer/EditCustomer';
import NewItem from '../Item/NewItem';
import ItemsList from '../Item/List';
import EditItem from '../Item/EditItem';
import DrawerComponent from './Drawer';
import DrawerScreenn from '../ScreenDrawer/DrawerScreen';
import SearchScreen from '../Search/SearchScreen';
//Utils
import { getTabBarIcon } from '../../utils/functions';
import { COLORS } from '../../constants/colors';
import style from './style'; 


import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerActions } from 'react-navigation-drawer';

import { Icon } from 'react-native-elements';

import { theme } from '../theme';

const defaultHeader = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    ...theme.typography.titleTextSemiBold,
    alignSelf: 'center',
  },
  headerBackTitle: null,
  headerTintColor: theme.colors.appbarTint,
};


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: defaultHeader,
  },
);


const InvoiceStack = createStackNavigator(
  {
    Invoice
  },
  {
    navigationOptions: defaultHeader,
  },
);

const CustomerStack = createStackNavigator({
  CustomersList,
  EditCustomer,
  NewCustomer
}, {
  navigationOptions: defaultHeader,
});

const ItemStack = createStackNavigator({
  ItemsList,
  EditItem,
  NewItem
}, {
  navigationOptions: defaultHeader,
});

const MainAppNavigator = createBottomTabNavigator(
  {
    Inicio: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="md-home" type="ionicon" color={tintColor} />,
      }),
    },
    Facturar: {
      screen: InvoiceStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="ios-document" type="ionicon" color={tintColor} />,
      }),
    },
    Clientes: {
      screen: CustomerStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="md-person" type="ionicon" color={tintColor} />,
      }),
    },
    Items: {
      screen: ItemStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="md-cart" type="ionicon" color={tintColor} />,
      }),
    },
  },
  {
    //initialRouteName: Inicio
    tabBarOptions: {
      showLabel: true,
      labelStyle: style.textRegular11,
      activeTintColor: COLORS.blueLight,
      inactiveTintColor: COLORS.white,
      style: {
        backgroundColor: COLORS.blueMedium,
        borderTopWidth: 0
      }
    }
  },
);

const Drawer = createDrawerNavigator({
  Main: {
    screen: MainAppNavigator,
  },
  DrawerS: {
    screen: DrawerScreenn,
    navigationOptions: { header: null },
  },
}, {
  contentComponent: DrawerComponent,
});

const DrawerNavigator = createDrawerNavigator(
  {
    Drawer,
    HomeScreen
  },
  {
    contentComponent: DrawerScreenn,
    getCustomActionCreators: (route, stateKey) => ({
      toggleFilterDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
    }),
  },
);

const AppNavigator = createAppContainer(DrawerNavigator);

export default AppNavigator; 



/*
const CustomersStackNavigator = createStackNavigator({
  CustomersList,
  NewCustomer,
  EditCustomer
});

const ItemsStackNavigator = createStackNavigator({
  ItemsList,
  NewItem,
  EditItem
});

const InvoiceStackNavigator = createStackNavigator({
  Invoice,
  NewInvoiceItem,
  NewInvoiceCustomer,
  ListInvoiceItem,
  ListInvoiceCustomer,
  InvoiceSummary
});

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

//BottomTabNavigator
const AppTabNavigator = createBottomTabNavigator({
  Inicio: {
    screen: HomeScreen
  },
  Facturar: {
    screen: InvoiceStackNavigator
  },
  Clientes: {
    screen: CustomersStackNavigator
  },
  Items: {
    screen: ItemsStackNavigator
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor)
  }),
  tabBarOptions: {
    activeTintColor: COLORS.blueLight,
    inactiveTintColor: 'white',
    style: {
      backgroundColor: COLORS.blueMedium,
    }
  }
});

//For TopBarNavigator
const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'BillMobile App',
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={style.logoMenu}>
            <Icon name='md-menu' size={28} color={COLORS.blueLight} />
          </View>
        </TouchableOpacity>
      ),
      headerRight:( 
        <Image
          source={require('../../images/Bill.png')}
          resizeMode = "contain"
          style = {style.logoBill}
        />
      ),
      headerStyle: { backgroundColor: COLORS.blueMedium},
      headerTitleStyle: style.headerText,
      headerTintColor: COLORS.white,
    })
  }
})

//DrawerNavigator
const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
}, {contentComponent: DrawerComponent})

//SwitchNavigator
const AppSwitchNavigator = createSwitchNavigator(
  {
    Intro,
    Initializing,
    Login: LoginStack,
    Configure: TaxConfigurationStack,
    Home: AppDrawerNavigator,
    Opinion,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(
  AppSwitchNavigator
);

export default AppNavigator;
*/