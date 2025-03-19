import { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@/app/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const onboardingSteps = [
  {
    title: 'Bem-vindo ao ServiZy!',
    description: 'Encontre e contrate serviços de forma rápida e segura.',
    image: require('@/assets/images/react-logo.png'),
  },
  {
    title: 'Serviços de Qualidade',
    description: 'Conectamos você com os melhores profissionais do mercado.',
    image: require('@/assets/images/react-logo.png'),
  },
  {
    title: 'Pagamento Seguro',
    description: 'Pague com segurança diretamente pelo app.',
    image: require('@/assets/images/react-logo.png'),
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
      navigation.replace('Login'); // Garante que o usuário não volte para o onboarding
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Image
        source={onboardingSteps[currentStep].image}
        className="w-60 h-60 mb-4"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold mb-2">
        {onboardingSteps[currentStep].title}
      </Text>
      <Text className="text-center mb-6">
        {onboardingSteps[currentStep].description}
      </Text>
      <Button
        title={
          currentStep === onboardingSteps.length - 1 ? 'Começar' : 'Próximo'
        }
        onPress={handleNext}
      />
    </View>
  );
}
