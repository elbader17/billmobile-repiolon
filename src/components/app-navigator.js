import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
import TaxConfiguration from './TaxConfiguration';

const AppStack = createStackNavigator(
  {
    Configure: TaxConfiguration,
    //HomeScreen: Home,
  }
)

const initialStack = createStackNavigator(
  {
    Intro,
    Authentication,
  },
  {
    headerMode: 'none',
  }
)

let AppNavigator = createAppContainer(createSwitchNavigator(
  {
    initialApp: initialStack,
    App: AppStack
  },
  {
    initialRouteName: 'initialApp',
  }
));

export default AppNavigator;