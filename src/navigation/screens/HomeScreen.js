import React from 'react';
import { Text, View } from 'react-native';
//import Background from '../../components/Background';
import ColoredHeader from '../../components/ColoredHeader';

export default function HomeScreen({ navigation }) {
  return (
    // <View>
    <ColoredHeader>
      <View className=" justify-center pt-12 pl-6">
         <Text className="text-white text-left font-inter text-lg font-semibold">Hello, Keisya</Text>
         <Text className="text-white text-left font-inter text-xs font-light">Upgrade your skill for better futures!</Text>
      </View>
    </ColoredHeader>
    // </View>
  );
}

