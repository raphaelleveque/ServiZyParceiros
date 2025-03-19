import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@/app/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const onboardingSteps = [
  {
    title: 'We provide professional service\nat a friendly price',
    description: 'Find the perfect Service for your home, fast and worry-free',
    image: require('@/assets/images/onboarding-screen-1.png'),
  },
  {
    title: 'Serviços de Qualidade',
    description: 'Conectamos você com os melhores profissionais do mercado.',
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

  const handleNext = async () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace('Login');
    }
  };
  return (
    <View className="flex-1 bg-white">
      {/* Imagem no fundo */}
      <View className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          source={onboardingSteps[currentStep].image}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Container do Texto */}
      <View className="bg-white rounded-b-3xl shadow-lg px-5 pt-8 pb-12 relative z-10">
        <Text className="text-2xl font-bold text-gray-900 text-left mb-2">
          {onboardingSteps[currentStep].title}
        </Text>
        <Text className="text-left text-gray-600 mb-6">
          {onboardingSteps[currentStep].description}
        </Text>

        <View className="flex-row justify-between items-center px-4">
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text className="text-gray-500">Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-blue-600 px-6 py-3 rounded-xl flex-row items-center"
            onPress={handleNext}
          >
            <Text className="text-white font-bold">
              {currentStep === onboardingSteps.length - 1 ? 'Start' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
