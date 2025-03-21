import { AuthStackParamList } from '@/app/types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';

type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
      {/* Container principal */}
      <View className="flex-1 px-6">
        {/* Área do Logo */}
        <View className="mt-10">
          <Image
            source={require('@/assets/images/logo.png')}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </View>

        {/* Área do Título */}
        <View className="mt-6 self-start">
          <Text className="text-3xl font-urbanist font-bold">
            Let's get you Login!
          </Text>
          <Text className="text-secondary mt-4 font-servy">
            Enter your information below
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
