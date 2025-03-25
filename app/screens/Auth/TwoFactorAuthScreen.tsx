import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Keyboard,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { AuthStackParamList } from '@/app/types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/app/constants/colors';
import TwoFactorAuthImage from '@/assets/images/twofactorauth.svg';

type TwoFactorAuthScreenProps = StackScreenProps<
  AuthStackParamList,
  'TwoFactorAuth'
>;

const TwoFactorAuthScreen = ({ navigation }: TwoFactorAuthScreenProps) => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (text: string, index: number) => {
    const newDigits = [...digits];
    newDigits[index] = text;
    setDigits(newDigits);

    // Fecha o teclado se o último dígito for preenchido
    if (index === 3 && text.length === 1) {
      Keyboard.dismiss();
    } else if (index < 3 && text.length === 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

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
            Enter OTP Code
          </Text>
          <Text className="text-secondary mt-4 font-syne">
            OTP code has been sent to (11) 99999-9999
          </Text>
        </View>

        {/* Área de input */}
        <View className="mt-8">
          <View className="flex-row items-center justify-between">
            {/* Crie 4 caixinhas de input */}
            {Array.from({ length: 4 }).map((_, index) => (
              <View
                key={index}
                className="border border-subtle-border rounded-xl p-3 flex-1 mx-1"
              >
                <TextInput
                  ref={inputRefs[index]}
                  className="font-syne text-body py-2 text-center text-4xl"
                  maxLength={1}
                  keyboardType="numeric"
                  value={digits[index]}
                  onChangeText={(text) => handleChange(text, index)}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Área de texto */}
        <View className="mt-2">
          <Text className="text-secondary font-syne text-right">
            Resend code in{' '}
            <Text className="text-primary font-syne">00:59</Text>
          </Text>
        </View>

        {/* Área de imagem */}
        <View className="mt-8 self-center">
          <TwoFactorAuthImage />
        </View>

        {/* Botão de enviar */}
        <TouchableOpacity
          className="bg-primary rounded-xl py-5 mt-8"
          onPress={() => navigation.navigate('Main')}
        >
          <Text className="text-white font-syne text-center">Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TwoFactorAuthScreen;
