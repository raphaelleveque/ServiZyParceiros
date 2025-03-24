import { AuthStackParamList } from '@/app/types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import GoogleIcon from '@/assets/images/google.svg';
import FacebookIcon from '@/assets/images/facebook2.svg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent
        />
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
            <Text className="text-secondary mt-4 font-syne">
              Enter your information below
            </Text>
          </View>

          <View className="flex-row gap-4 mt-6">
            {/* Botão Google */}
            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-subtle-border rounded-xl py-4">
              <GoogleIcon width={20} height={20} />
              <Text className="ml-2 font-syne">Google</Text>
            </TouchableOpacity>

            {/* Botão Facebook */}
            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-subtle-border rounded-xl py-4">
              <FacebookIcon width={24} height={24} />
              <Text className="ml-2 font-syne">Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Divisor "Or login with" */}
          <View className="flex-row items-center mt-8">
            <View className="flex-1 h-[1px] bg-subtle-border" />
            <Text className="mx-4 text-secondary font-syne">Or login with</Text>
            <View className="flex-1 h-[1px] bg-subtle-border" />
          </View>

          {/* Form de Login */}
          <View className="mt-8 gap-4">
            {/* Input de Email */}
            <View>
              <View className="border border-primary rounded-xl px-4">
                <Text className="text-secondary text-xs font-syne mt-2">
                  Email Address
                </Text>
                <TextInput
                  placeholder="Servizy@example.com"
                  placeholderTextColor="#697586"
                  className="font-syne text-body py-2"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>
            </View>

            {/* Input de Senha */}
            <View>
              <View className="border border-primary rounded-xl px-4 flex-row">
                <View className="flex-1">
                  <Text className="text-secondary text-xs font-syne mt-2">
                    Password
                  </Text>
                  <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="#697586"
                    className="font-syne text-body py-2"
                    secureTextEntry={!showPassword}
                  />
                </View>
                <View className="justify-center">
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="p-2"
                  >
                    <Feather
                      name={showPassword ? 'eye' : 'eye-off'}
                      size={22}
                      color="#697586"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="self-end">
              <Text className="text-primary font-syne">Forgot Password?</Text>
            </TouchableOpacity>

            {/* Botão Login */}
            <TouchableOpacity
              className="bg-primary rounded-xl py-4 mt-6"
              onPress={() => navigation.navigate('Main')}
            >
              <Text className="text-white font-syne text-center">Login</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <View className="flex-row justify-center items-center mt-6">
              <Text className="text-body font-syne">
                Don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text className="text-primary font-syne">Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
