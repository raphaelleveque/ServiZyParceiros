import { useState } from 'react';
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

const onboardingSteps = [
  {
    title: 'We provide professional service\nat a friendly price',
    description: 'Find the perfect Service for your home, fast and worry-free',
    image: require('@/assets/images/onboarding-screen-1.png'),
  },
  {
    title: "Let's make awesome changes to\nyour home",
    description: 'Find the perfect Service for your home, fast and worry-free',
    image: require('@/assets/images/onboarding-screen-2.png'),
  },
  {
    title: 'Pagamento Seguro',
    description: 'Pague com segurança diretamente pelo app.',
    image: require('@/assets/images/onboarding-screen-3.png'),
  },
];

type OnboardingScreenProps = StackScreenProps<AuthStackParamList, 'Onboarding'>;

export default function OnboardingScreen({
  navigation,
}: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;

  const handleNext = async () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace('Login');
    }
  };

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Conteúdo do cartão branco */}
      <View
        className="bg-white rounded-b-3xl"
        style={{
          paddingTop: insets.top,
          paddingBottom: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          zIndex: 10,
        }}
      >
        {/* Indicadores de progresso */}
        <View className="px-6 py-4">
          <View className="flex-row">
            {onboardingSteps.map((_, index) => (
              <View
                key={index}
                className={`h-1.5 rounded-full mx-1 flex-1 ${index === currentStep ? 'bg-blue-600' : 'bg-gray-200'}`}
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
          style={{
            width: Math.min(screenWidth, 402), // Limita a largura ao menor valor entre a largura da tela e 402
            height: 538, // Altura fixa conforme especificação
            overflow: 'hidden',
          }}
        >
          <Image
            source={onboardingSteps[currentStep].image}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain" // Usando 'contain' para mostrar a imagem inteira
          />
        </View>
      </View>
    </View>
  );
}
