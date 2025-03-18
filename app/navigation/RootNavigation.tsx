import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './MainNavigation';
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import { AuthStackParamList } from '../types/navigation';
import useInitialRoute from '../hooks/useInitialRoute';
import LoadingScreen from '../components/LoadingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RootNavigationProps {
  isAuthenticated: boolean;
}

const Stack = createStackNavigator<AuthStackParamList>();

export default function RootNavigation({
  isAuthenticated,
}: RootNavigationProps) {
  const initialRouteName = useInitialRoute(isAuthenticated);

  if (initialRouteName === null) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        initialParams={{
          onFinish: async () => {
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
          },
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainNavigation} />
    </Stack.Navigator>
  );
}
