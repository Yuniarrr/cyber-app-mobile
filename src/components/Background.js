import { View, Text } from "react-native";
import React from "react";

export default function Background({ children }) {
  return (
    <View className="flex-1 items-center justify-center bg-[#FFFFFF]">
      {children}
    </View>
  );
}
