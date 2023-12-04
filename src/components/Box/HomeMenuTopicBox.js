import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const HomeMenuTopicBox = ({ buttonText }) => {
  return (
    <View className="flex-1 m-2">
      <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-14 w-44 border-2 border-light-gray">
        <Text className="text-sm font-semibold text-center text-darkblue">{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeMenuTopicBox;
