import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function Background({ children, useBackround }) {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      {useBackround && (
        <View className="absolute w-full bg-darkblue" style={{ height: 335 }} />
      )}
      <View className="mx-3 my-5">
        {children}
      </View>
    </SafeAreaView>
  );
}
