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
  ScrollView,
  Switch,
} from 'react-native';
import GoogleIcon from '@/assets/images/google.svg';
import FacebookIcon from '@/assets/images/facebook2.svg';
import ForgotPasswordImage from '@/assets/images/forgot-password.svg';
import MessageIcon from '@/assets/images/message.svg';
import EmailIcon from '@/assets/images/email.svg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

type ForgotPasswordScreenProps = StackScreenProps<
  AuthStackParamList,
  'ForgotPassword'
>;

export default function ForgotPasswordScreen({
  navigation,
}: ForgotPasswordScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />

      {/* Container principal */}
      <View className="flex-1 px-6">
        {/* Ícone de voltar */}
        <View className="mt-10">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Área do Título */}
        <View className="mt-6 self-start">
          <Text className="text-3xl font-urbanist font-bold">
            Forgot your password!
          </Text>
          <Text className="text-secondary mt-4 font-syne">
            Select which contact details should we use to reset your password
          </Text>
        </View>

        {/* Área de imagem */}
        <View className="mt-8 self-center">
          <ForgotPasswordImage />
        </View>

        {/* Área de seleção de contato */}
        <View className="mt-8">
          {/* Botão de telefone */}
          <TouchableOpacity>
            <View className="flex-row items-center border border-subtle-border rounded-3xl p-3 my-2">
              {/* Ícone circular */}
              <View className="bg-primary rounded-full w-14 h-14 items-center justify-center mr-4">
                <MessageIcon width={20} height={20} color="white" />
              </View>

              {/* Texto */}
              <View className="flex-1">
                <Text className="text-secondary text-lg font-syne">
                  Send OTP via SMS
                </Text>
                <Text className="text-body text-xl font-syne font-medium mt-1">
                  +55 (11) 99999-9999
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Botão de email */}
          <TouchableOpacity>
            <View className="flex-row items-center border border-subtle-border rounded-3xl p-3 my-2">
              {/* Ícone circular */}
              <View className="bg-primary rounded-full w-14 h-14 items-center justify-center mr-4">
                <EmailIcon width={20} height={20} color="white" />
              </View>

              {/* Texto */}
              <View className="flex-1">
                <Text className="text-secondary text-lg font-syne">
                  Send OTP via Email
                </Text>
                <Text className="text-body text-xl font-syne font-medium mt-1">
                  servizy@example.com
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Botão de enviar */}
        <TouchableOpacity
          className="bg-primary rounded-xl py-5 mt-4"
          onPress={() => navigation.navigate('Main')}
        >
          <Text className="text-white font-syne text-center">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
