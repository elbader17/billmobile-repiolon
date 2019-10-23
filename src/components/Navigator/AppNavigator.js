import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerActions } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
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
import DrawerScreen from '../ScreenDrawer/DrawerScreen';
//Utils
import { COLORS } from '../../constants/colors';
import style from './style'; 

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const InvoiceStack = createStackNavigator({
  Invoice,
  ListInvoiceCustomer,
  ListInvoiceItem,
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

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: MainAppNavigator,
    },
    DrawerScreen: {
      screen: DrawerScreen,
      navigationOptions: { header: null },
    },
  }, 
  { contentComponent: DrawerComponent }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Drawer
  },
  {
    contentComponent: DrawerScreen,
    getCustomActionCreators: (route, stateKey) => ({
      toggleFilterDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
    }),
  },
);

//SwitchNavigator
const AppSwitchNavigator = createSwitchNavigator(
  {
    Intro,
    Login: LoginStack,
    Home: DrawerNavigator
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(AppSwitchNavigator);

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