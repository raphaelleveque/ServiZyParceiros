import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import { resetOnboardingStatus } from './hooks/useInitialRoute';
import '@/global.css';

function App() {
  // Simulando um estado de autenticação como verdadeiro
  const isAuthenticated = false; // Vamos fingir que o usuário já está autenticado
  resetOnboardingStatus(); // MÉTODO PARA DEBUG
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigation isAuthenticated={isAuthenticated} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

registerRootComponent(App);
