import { AuthStackParamList } from '@/app/types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, SafeAreaView } from 'react-native';

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
      <Text className="text-xl font-bold">Não possui conta? Cadastre-se</Text>
      <Button
        title="Cadastre-se"
        onPress={() => {
          navigation.replace('Register');
        }}
      />
    </SafeAreaView>
  );
}
