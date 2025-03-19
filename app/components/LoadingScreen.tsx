import { View, Image, ActivityIndicator } from 'react-native';

export default function LoadingScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image source={require('@/assets/images/logo.png')} className="mb-4" />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
