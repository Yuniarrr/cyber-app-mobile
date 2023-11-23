import React from 'react';
import { View } from 'react-native';

const ColoredHeader = ({ children }) => {
  return (
    <View className="w-[] h-[300] bg-[#1E2857] bg-white-[bottom] rounded-none">
      {children}
    </View>
  );
};

export default ColoredHeader;
