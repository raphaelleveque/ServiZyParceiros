import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { AuthStackParamList } from '@/app/types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import NewPasswordImage from '@/assets/images/enter-new-password.svg';
import PopUpSuccess from '@/app/components/PopUpSuccess';

type EnterNewPasswordScreenProps = StackScreenProps<
  AuthStackParamList,
  'EnterNewPassword'
>;

const EnterNewPasswordScreen = ({
  navigation,
}: EnterNewPasswordScreenProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setError('');
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setError('');
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      alert('Passwords do not match');
    } else {
      setIsPopupVisible(true);
    }
  };

  const scrollToInput = (inputRef: React.RefObject<TextInput>) => {
    if (inputRef.current && scrollViewRef.current) {
      inputRef.current.measureLayout(
        // @ts-ignore - Isso é necessário porque o tipo não está definido corretamente
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
        },
        () => {}
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1 bg-white">
          <StatusBar
            barStyle="dark-content"
            backgroundColor="white"
            translucent
          />
          <ScrollView
            ref={scrollViewRef}
            className="flex-1"
            showsVerticalScrollIndicator={false}
          >
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
                  Enter New Password
                </Text>
                <Text className="text-secondary mt-4 font-syne">
                  Please enter new password
                </Text>
              </View>

              {/* Área de imagem */}
              <View className="mt-8 self-center">
                <NewPasswordImage />
              </View>

              {/* Input de Senha */}
              <View className="mt-8">
                <View className="border border-primary rounded-xl px-4 py-1 flex-row">
                  <View className="flex-1">
                    <Text className="text-primary text-xs font-syne mt-2">
                      Password
                    </Text>
                    <TextInput
                      ref={passwordInputRef}
                      placeholder="Enter your password"
                      placeholderTextColor="#697586"
                      className="font-syne text-body py-2"
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={setPassword}
                      onFocus={() => scrollToInput(passwordInputRef)}
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

              {/* Input de Confirmar Senha */}
              <View className="mt-3">
                <View className="border border-primary rounded-xl px-4 py-1 flex-row">
                  <View className="flex-1">
                    <Text className="text-primary text-xs font-syne mt-2">
                      Confirm Password
                    </Text>
                    <TextInput
                      ref={confirmPasswordInputRef}
                      placeholder="Enter your password"
                      placeholderTextColor="#697586"
                      className="font-syne text-body py-2"
                      secureTextEntry={!showConfirmPassword}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      onFocus={() => scrollToInput(confirmPasswordInputRef)}
                    />
                  </View>
                  <View className="justify-center">
                    <TouchableOpacity
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="p-2"
                    >
                      <Feather
                        name={showConfirmPassword ? 'eye' : 'eye-off'}
                        size={22}
                        color="#697586"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Botão de enviar */}
              <TouchableOpacity
                className="bg-primary rounded-xl py-4 mt-6"
                onPress={handleSubmit}
              >
                <Text className="text-white font-syne text-center">Save</Text>
              </TouchableOpacity>
            </View>
            <PopUpSuccess
              visible={isPopupVisible}
              onClose={() => {
                setIsPopupVisible(false);
                navigation.navigate('Main');
              }}
              title="Password Updated"
              description="Your password has been updated successfully"
            />
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default EnterNewPasswordScreen;
