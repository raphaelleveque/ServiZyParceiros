import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const PopUpSuccess = ({ visible, onClose, title, description }: { visible: boolean; onClose: () => void, title: string, description: string }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <View
        className="flex-1 justify-center items-center bg-black/50"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View className="bg-white rounded-xl p-6 w-[85%] items-center">
          <View className="bg-primary w-20 h-20 rounded-full justify-center items-center mb-4">
            <Text className="text-white text-4xl">✓</Text>
          </View>

          <Text className="text-heading text-2xl font-urbanist font-bold mb-4 text-center">
            {title}
          </Text>

          <Text className="text-body mb-6 text-center">
            {description}
          </Text>

          <TouchableOpacity
            className="bg-primary rounded-xl py-4 px-6 w-full"
            onPress={onClose}
          >
            <Text className="text-white text-center font-bold">
              Go to Home Page
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PopUpSuccess;
