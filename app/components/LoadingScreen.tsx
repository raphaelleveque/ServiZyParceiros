import { View, Image } from 'react-native';

export default function LoadingScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require('@/assets/images/logo.png')}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}
