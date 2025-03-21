import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import { resetOnboardingStatus } from './hooks/useInitialRoute';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import '@/global.css';

// Previne que a splash screen seja fechada automaticamente
SplashScreen.preventAutoHideAsync();

function App() {
  const isAuthenticated = false;
  resetOnboardingStatus(); // MÉTODO PARA DEBUG

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation isAuthenticated={isAuthenticated} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
