import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, SafeAreaView } from 'react-native';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-bold">Tela de Login</Text>
      <Button
        title="Entrar"
        onPress={() => {
          navigation.replace('Main');
        }}
      />
    </SafeAreaView>
  );
}
