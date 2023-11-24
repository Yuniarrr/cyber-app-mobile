import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../../components/Background";

export default function Search({ navigation }) {
  return (
    <Background>
      <Text
        className="text-green-500 font-bold"
        onPress={() => navigation.navigate("Search")}
      >
        Search
      </Text>
      <StatusBar style="auto" />
    </Background>
  );
}
