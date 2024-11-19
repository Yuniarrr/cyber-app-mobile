import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';

import SeeMoreArticleBox from "../components/Box/SeeMoreArticleBox";

export default function SeeMoreDidYouKnow({ navigation }) {
  return (
    <Background>
      <ScrollView className="mx-3 mt-3">
        <View className="flex flex-row w-full">
          <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text className="mx-4 text-lg font-semibold text-center text-black font-inter ">Did You Know</Text>
        </View>
        <View className="flex flex-col items-center justify-center">
          <SeeMoreArticleBox
            imageSource={require('../../assets/Article1.jpeg')}
            category="Web"
            title="Guide to Integrate API in Back End Development"
            backgroundColor="bg-light-yellow text-yellow"
          />
          <SeeMoreArticleBox
            imageSource={require('../../assets/Article2.jpeg')}
            category="Mobile"
            title="Unleashing the Potential of Mobile Development"
            backgroundColor="bg-light-blue text-blue"
          />
        </View>
      </ScrollView>
    </Background>
  );
}
