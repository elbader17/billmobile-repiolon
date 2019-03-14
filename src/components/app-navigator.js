import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';

let RootStack = createStackNavigator(
  {
    Intro,
    Authentication,
  },
  {
    headerMode: 'none',
  }
)

let AppNavigator = createAppContainer(RootStack);

export default AppNavigator;