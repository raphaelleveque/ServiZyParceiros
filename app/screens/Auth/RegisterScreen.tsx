import { AuthStackParamList } from '@/app/types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons';

type RegisterScreenProps = StackScreenProps<AuthStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

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
          {/* Container principal */}
          <ScrollView
            ref={scrollViewRef}
            className="flex-1"
            showsVerticalScrollIndicator={false}
          >
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
                  Register Now!
                </Text>
                <Text className="text-secondary mt-4 font-syne">
                  Enter your information below
                </Text>
              </View>

              {/* Form de Login */}
              <View className="mt-8 gap-4">
                {/* Input de Nome */}
                <View>
                  <View className="border border-primary rounded-xl px-4">
                    <Text className="text-primary text-xs font-syne mt-2">
                      Name
                    </Text>
                    <TextInput
                      placeholder="Raphael Leveque"
                      placeholderTextColor="#697586"
                      className="font-syne text-body py-2"
                      autoCapitalize="words"
                    />
                  </View>
                </View>

                {/* Input de Email */}
                <View>
                  <View className="border border-primary rounded-xl px-4">
                    <Text className="text-primary text-xs font-syne mt-2">
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

                {/* Input de Telefone */}
                <View>
                  <View className="border border-primary rounded-xl px-4">
                    <Text className="text-primary text-xs font-syne mt-2">
                      Telefone
                    </Text>
                    <TextInput
                      placeholder="(62) 99999-9999"
                      placeholderTextColor="#697586"
                      className="font-syne text-body py-2"
                      keyboardType="number-pad"
                      value={telefone}
                      onChangeText={(text) => {
                        // Remove todos os caracteres não numéricos
                        const digits = text.replace(/\D/g, '');

                        // Aplica a formatação conforme os dígitos são inseridos
                        let formattedText = '';
                        if (digits.length === 0) {
                          formattedText = '';
                        } else if (digits.length <= 2) {
                          formattedText = `(${digits}`;
                        } else if (digits.length <= 7) {
                          formattedText = `(${digits.substring(0, 2)}) ${digits.substring(2)}`;
                        } else if (digits.length <= 10) {
                          formattedText = `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7)}`;
                        } else {
                          formattedText = `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7, 11)}`;
                        }

                        // Limita a 11 dígitos (com DDD)
                        if (digits.length <= 11) {
                          setTelefone(formattedText);
                        }
                      }}
                    />
                  </View>
                </View>

                {/* Input de Senha */}
                <View>
                  <View className="border border-primary rounded-xl px-4 flex-row">
                    <View className="flex-1">
                      <Text className="text-primary text-xs font-syne mt-2">
                        Password
                      </Text>
                      <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="#697586"
                        className="font-syne text-body py-2"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        ref={passwordInputRef}
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
                <View>
                  <View className="border border-primary rounded-xl px-4 flex-row">
                    <View className="flex-1">
                      <Text className="text-primary text-xs font-syne mt-2">
                        Confirm Password
                      </Text>
                      <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="#697586"
                        className="font-syne text-body py-2"
                        secureTextEntry={!showConfirmPassword}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        ref={confirmPasswordInputRef}
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

                {/* Botão Register */}
                <TouchableOpacity
                  className="bg-primary rounded-xl py-4 mt-6"
                  onPress={() => {
                    if (password !== confirmPassword) {
                      alert('Passwords do not match');
                    } else {
                      navigation.navigate('ConfirmIdentity');
                    }
                  }}
                >
                  <Text className="text-white font-syne text-center">
                    Register
                  </Text>
                </TouchableOpacity>

                {/* Register Link */}
                <View className="flex-row justify-center items-center mt-6">
                  <Text className="text-body font-syne">
                    Already a member?{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text className="text-primary font-syne">Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
