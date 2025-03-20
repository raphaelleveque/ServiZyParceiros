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
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

        <Animated.View
          className="px-6"
          style={{
            opacity: fadeAnim,
            transform: [{ translateX: slideAnim }],
          }}
        >
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
        </Animated.View>
      </View>

      {/* Container da imagem com tamanho controlado */}
      <View className="flex-1 items-center justify-center">
        <View
          className="overflow-hidden"
          style={{
            width: Math.min(screenWidth, 402) * 1.2,
            height: 538 * 1.2,
          }}
        >
          <Animated.View
            className="w-full h-full"
            style={{
              opacity: imageFadeAnim,
            }}
          >
            <Image
              source={onboardingSteps[currentStep].image}
              className="w-full h-full"
              resizeMode="cover"
            />
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
