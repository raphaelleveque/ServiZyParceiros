import { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@/app/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ArrowRightIcon from '@/assets/images/arrow-right.svg';

const onboardingSteps = [
  {
    title: 'Conecte-se a novos clientes',
    description:
      'Divulgue seus serviços, alcance mais clientes e aumente sua renda com a ServiZy.',
    image: require('@/assets/images/beauty.jpg'),
  },
  {
    title: 'Gerencie seus serviços com facilidade',
    description:
      'Agende, converse com clientes e acompanhe pagamentos em um só lugar.',
    image: require('@/assets/images/cleaner.png'),
  },
  {
    title: 'Receba pagamentos com segurança',
    description: 'Pagamento garantido direto pelo app, sem risco de calote.',
    image: require('@/assets/images/painter2.png'),
  },
];

type OnboardingScreenProps = StackScreenProps<AuthStackParamList, 'Onboarding'>;

export default function OnboardingScreen({
  navigation,
}: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const imageFadeAnim = useRef(new Animated.Value(1)).current;
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;

  const animateTransition = (nextStep: number) => {
    // Animação contínua
    Animated.parallel([
      // Texto fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      // Texto slide out
      Animated.timing(slideAnim, {
        toValue: -15,
        duration: 300,
        useNativeDriver: true,
      }),
      // Imagem fade out
      Animated.timing(imageFadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Atualizamos o estado após o fade out
      setCurrentStep(nextStep);

      // Texto slide in
      Animated.timing(slideAnim, {
        toValue: 15,
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        // Fade in final
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(imageFadeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ]).start();
      });
    });
  };

  const handleNext = async () => {
    if (currentStep < onboardingSteps.length - 1) {
      animateTransition(currentStep + 1);
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace('Login');
    }
  };

  return (
    <View className="flex-1">
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
                  index === currentStep ? 'bg-primary' : 'bg-subtle'
                }`}
              />
            ))}
          </View>
        </View>

        <Animated.View
          className="px-6"
          style={{
            opacity: fadeAnim,
            transform: [{ translateX: slideAnim }],
          }}
        >
          <Text className="text-3xl font-urbanist font-bold text-heading mb-4">
            {onboardingSteps[currentStep].title}
          </Text>
          <Text className="text-body font-urbanist text-lg mb-8">
            {onboardingSteps[currentStep].description}
          </Text>

          <View className="flex-row justify-between items-center mb-2">
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text className="text-secondary font-urbanist font-medium text-lg">
                Skip
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-primary px-8 py-3 rounded-lg flex-row items-center justify-center"
              onPress={handleNext}
            >
              <Text className="text-white font-urbanist font-medium text-lg mr-1">
                {currentStep === onboardingSteps.length - 1 ? 'Start' : 'Next'}
              </Text>
              <ArrowRightIcon width={18} height={18} color="white" />
            </TouchableOpacity>
          </View>
        </Animated.View>
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
            <Animated.View
              key={index}
              className="w-full h-full absolute top-0 left-0"
              style={{
                opacity: index === currentStep ? imageFadeAnim : 0,
              }}
            >
              <Image
                source={step.image}
                className="w-full h-full"
                resizeMode="cover"
              />
            </Animated.View>
          ))}
        </View>
      </View>
    </View>
  );
}
