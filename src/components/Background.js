import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function Background({ children }) {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      {/* <View className="mx-3 my-5"> */}
      {children}
      {/* </View> */}
    </SafeAreaView>
  );
}
