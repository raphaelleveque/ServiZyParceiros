import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  App: undefined;
};

type RegisterScreenProps = StackScreenProps<AuthStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  return (
    <View>
      <Text>Tela de Registro</Text>
      <Button
        title="Já tenho uma conta"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Registrar" onPress={() => navigation.replace('App')} />
    </View>
  );
}
