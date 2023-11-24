import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Course({ navigation }) {
  return (
    <Background>
      <Text
        className="text-green-500 font-bold"
        onPress={() => navigation.navigate("Course")}
      >
        Course
      </Text>
      <StatusBar style="auto" />
    </Background>
  );
}
