import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import { resetOnboardingStatus } from './hooks/useInitialRoute';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '@/global.css';

function App() {
  // Simulando um estado de autenticação como verdadeiro
  const isAuthenticated = false; // Vamos fingir que o usuário já está autenticado
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
