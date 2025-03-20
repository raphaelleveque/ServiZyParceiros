import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@/app/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LoadingScreen from '@/app/components/LoadingScreen';

const onboardingSteps = [
  {
    title: 'Conecte-se a novos clientes',
    description:
      'Divulgue seus serviços, alcance mais clientes e aumente sua renda com a ServiZy.',
    image: require('@/assets/images/onboarding-screen-1.png'),
  },
  {
    title: 'Gerencie seus serviços com facilidade',
    description:
      'Agende, converse com clientes e acompanhe pagamentos em um só lugar.',
    image: require('@/assets/images/onboarding-screen-2.png'),
  },
  {
    title: 'Receba pagamentos com segurança',
    description: 'Pagamento garantido direto pelo app, sem risco de calote.',
    image: require('@/assets/images/onboarding-screen-3.png'),
  },
];

type OnboardingScreenProps = StackScreenProps<AuthStackParamList, 'Onboarding'>;

export default function OnboardingScreen({
  navigation,
}: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;

  // Simular carregamento das imagens
  useEffect(() => {
    // Dar um tempo para o React Native processar as imagens
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleNext = async () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace('Login');
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Conteúdo do cartão branco */}
      <View
        className="bg-white rounded-b-3xl shadow-md shadow-black/10 pb-6 z-10"
        style={{
          paddingTop: insets.top,
          elevation: 3,
        }}
      >
        {/* Indicadores de progresso */}
        <View className="px-6 py-6">
          <View className="flex-row">
            {onboardingSteps.map((_, index) => (
              <View
                key={index}
                className={`h-1.5 rounded-full mx-1 flex-1 ${
                  index === currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </View>
        </View>

        <View className="px-6">
          <Text className="text-3xl font-bold text-gray-900 mb-4">
            {onboardingSteps[currentStep].title}
          </Text>
          <Text className="text-gray-600 text-lg mb-8">
            {onboardingSteps[currentStep].description}
          </Text>

          <View className="flex-row justify-between items-center mb-2">
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text className="text-gray-500 font-medium text-lg">Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-blue-600 px-8 py-3 rounded-lg flex-row items-center justify-center"
              onPress={handleNext}
            >
              <Text className="text-white font-medium text-lg mr-1">
                {currentStep === onboardingSteps.length - 1 ? 'Start' : 'Next'}
              </Text>
              <Ionicons name="arrow-forward" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Container da imagem com tamanho controlado */}
      <View className="flex-1 items-center justify-center">
        <View
          className="overflow-hidden relative"
          style={{
            width: Math.min(screenWidth, 402) * 1.2,
            height: 538 * 1.2,
          }}
        >
          {onboardingSteps.map((step, index) => (
            <Image
              key={index}
              source={step.image}
              className="w-full h-full absolute top-0 left-0"
              resizeMode="cover"
              style={{
                opacity: index === currentStep ? 1 : 0,
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
