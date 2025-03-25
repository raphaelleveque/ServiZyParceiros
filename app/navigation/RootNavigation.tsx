import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './MainNavigation';
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import { AuthStackParamList } from '../types/navigation';
import useInitialRoute from '../hooks/useInitialRoute';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import TwoFactorAuthScreen from '../screens/Auth/TwoFactorAuthScreen';
interface RootNavigationProps {
  isAuthenticated: boolean;
}

const Stack = createStackNavigator<AuthStackParamList>();

export default function RootNavigation({
  isAuthenticated,
}: RootNavigationProps) {
  const initialRouteName = useInitialRoute(isAuthenticated);

  useEffect(() => {
    if (initialRouteName !== null) {
      // Esconde a splash screen apenas quando initialRouteName estiver pronto
      SplashScreen.hideAsync();
    }
  }, [initialRouteName]);

  if (initialRouteName === null) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="TwoFactorAuth" component={TwoFactorAuthScreen} />
      <Stack.Screen name="Main" component={MainNavigation} />
    </Stack.Navigator>
  );
}
