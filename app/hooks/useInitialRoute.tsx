import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFirstLaunch } from './useFirstLaunch';

export default function useInitialRoute(isAuthenticated: boolean) {
  const isFirstLaunch = useFirstLaunch();

  if (isFirstLaunch === null) {
    return null; // Indica que ainda estamos carregando
  }

  return isFirstLaunch ? 'Onboarding' : isAuthenticated ? 'Main' : 'Login';
}

export const resetOnboardingStatus = async () => {
  await AsyncStorage.removeItem('hasLaunched');
};
