import { useFonts } from 'expo-font';

export function useFontsLoaded() {
  const [fontsLoaded] = useFonts({
    Urbanist: require('@/assets/fonts/Urbanist-VariableFont_wght.ttf'),
    Syne: require('@/assets/fonts/Syne-VariableFont_wght.ttf'),
  });

  return fontsLoaded;
}
