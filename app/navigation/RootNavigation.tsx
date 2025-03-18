// src/navigation/RootNavigation.tsx
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';

interface RootNavigationProps {
  isAuthenticated: boolean;
}

export default function RootNavigation({
  isAuthenticated,
}: RootNavigationProps) {
  console.log('isAuthenticated:', isAuthenticated);
  console.log(
    'Rendering:',
    isAuthenticated ? 'MainNavigation' : 'AuthNavigation'
  );

  return <>{isAuthenticated ? <MainNavigation /> : <AuthNavigation />}</>;
}
