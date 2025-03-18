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
  return <>{isAuthenticated ? <MainNavigation /> : <AuthNavigation />}</>;
}
