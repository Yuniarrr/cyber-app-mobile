import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ColoredHeader = ({ children }) => {
  return (
    // <SafeAreaView className="flex-initial h-[350] bg-[#1E2857] bg-white-[bottom] rounded-none">
    //   <View className="mx-3 my-5">
    //   <ScrollView>
    //     {children}
    //   </ScrollView>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView className="flex-1 bg-[#FFF]">
        <View className="h-[300] bg-[#1E2857]" >
        {/* Bagian Bawah (Putih) */}
          <View className="mx-3 my-5">
            {children}
          </View>
        </View>
    </SafeAreaView>

  );
};


export default ColoredHeader;
