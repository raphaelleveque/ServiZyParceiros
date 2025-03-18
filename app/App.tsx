import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';

function App() {
  // Simulando um estado de autenticação como verdadeiro
  const isAuthenticated = true; // Vamos fingir que o usuário já está autenticado

  return (
    <NavigationContainer>
      {/* RootNavigation vai decidir para onde navegar com base na autenticação */}
      <RootNavigation isAuthenticated={isAuthenticated} />
    </NavigationContainer>
  );
}


registerRootComponent(App);
