import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const HomeMenuTopicBox = ({ buttonText }) => {
  return (
    <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-14 w-full border-2 border-light-gray mr-1">
      <Text className="text-sm font-semibold text-center text-darkblue">{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default HomeMenuTopicBox;
