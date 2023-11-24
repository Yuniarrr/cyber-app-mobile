import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ColoredHeader = ({ children }) => {
  return (
    <SafeAreaView className="h-[300] bg-[#1E2857] bg-white-[bottom] rounded-none">
      <View className="mx-3 my-5">
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ColoredHeader;
