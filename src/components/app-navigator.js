import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';
import Intro from './Intro';
import Authentication from './Authentication';
//Temporal
import TaxConfiguration from './TaxConfiguration';

let RootStack = createStackNavigator(
  {
    TaxConfiguration,
    //Intro,
    //Authentication,
  },
  {
    //headerMode: 'none',
  }
)

let AppNavigator = createAppContainer(RootStack);

export default AppNavigator;