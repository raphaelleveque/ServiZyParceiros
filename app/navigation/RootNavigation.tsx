import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './MainNavigation';
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import { ActivityIndicator, View, Image } from 'react-native';
import { useFirstLaunch } from '../hooks/useFirstLaunch';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import { AuthStackParamList } from '../types/navigation';

interface RootNavigationProps {
  isAuthenticated: boolean;
}

const Stack = createStackNavigator<AuthStackParamList>();

export const resetOnboardingStatus = async () => {
  await AsyncStorage.removeItem('hasSeenOnboarding');
};

export default function RootNavigation({
  isAuthenticated,
}: RootNavigationProps) {
  const hasSeenOnboarding = useFirstLaunch();

  if (hasSeenOnboarding === null) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Image source={require('@/assets/images/logo.png')} className="mb-4" />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const initialRouteName = !hasSeenOnboarding
    ? 'Onboarding'
    : isAuthenticated
      ? 'Main'
      : 'Login';

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
