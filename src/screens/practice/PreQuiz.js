import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Background from "../../components/Background";
import HeaderCyberSec from "../../../assets/course/header-cybersecurity.svg";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Chapters from "../../../assets/course/chapters.svg";

export default function PreQuiz() {
  const navigation = useNavigation();

  return (
    <Background useBackround={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full bg-darkblue">
        <View className="absolute w-full h-full bg-darkblue" />
        <View className="mx-3 my-5">
        <View className="flex flex-col items-center  mb-5 gap-y-4">
            <View className="flex flex-row items-center justify-between w-full">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="">
                <Feather
                  name="arrow-left"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
              <Text className="text-lg font-semibold text-center  text-white">
                Cybersecurity
              </Text>
              <Feather
                name="more-vertical"
                size={20}
                color="white"
              />
            </View>
          
            <HeaderCyberSec width={"100%"} />
            <View className="mx-6">
              <Text className="font-bold text-white text-lg">
                The World of Cybersecurity
              </Text>
            </View>
            <View className="flex flex-row items-center justify-around w-80 mx-auto py-1 bg-white rounded-lg mb-60">
              <View className="flex-row items-center gap-x-1">
                <Chapters />
                <Text className="text-xs font-medium">11 Question</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("quiz-1")} className="mx-auto">
              <View className="p-4 w-80 bg-white rounded-full">
                <Text className="text-center font-bold text-black">
                  Start
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
