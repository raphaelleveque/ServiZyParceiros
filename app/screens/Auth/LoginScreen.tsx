import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  App: undefined;
};

type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View>
      <Text>Tela de Login</Text>
      <Button title="Entrar" onPress={() => navigation.replace('App')} />
    </View>
  );
}
