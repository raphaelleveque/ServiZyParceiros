import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './MainNavigation';
// import ProviderDetailsScreen from '../screens/ProviderDetailsScreen';
// import CartScreen from '../screens/CartScreen';
// import SummaryScreen from '../screens/SummaryScreen';
// import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  // return (
  //   <Stack.Navigator screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="Main" component={MainNavigation} />
  //     <Stack.Screen name="ProviderDetails" component={ProviderDetailsScreen} />
  //     <Stack.Screen name="Cart" component={CartScreen} />
  //     <Stack.Screen name="Summary" component={SummaryScreen} />
  //     <Stack.Screen name="Payment" component={PaymentScreen} />
  //   </Stack.Navigator>
  // );
}
