import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Profile({ navigation }) {
  return (
    <Background>
      <View className="flex flex-col items-start justify-start">
        <Text className="w-full text-center">Profile</Text>
      </View>
    </Background>
  );
}