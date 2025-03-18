import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFirstLaunch } from './useFirstLaunch';

export default function useInitialRoute(isAuthenticated: boolean) {
  const hasSeenOnboarding = useFirstLaunch();

  if (hasSeenOnboarding === null) {
    return null; // Indica que ainda estamos carregando
  }

  return !hasSeenOnboarding ? 'Onboarding' : isAuthenticated ? 'Main' : 'Login';
}

export const resetOnboardingStatus = async () => {
  await AsyncStorage.removeItem('hasSeenOnboarding');
};
