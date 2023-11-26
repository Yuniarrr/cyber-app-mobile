import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Background from "../../components/Background";
import HeaderCyberSec from "../../../assets/course/header-cybersecurity.svg";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Chapters from "../../../assets/course/chapters.svg";

export default function Quiz2() {
  const navigation = useNavigation();

  return (
    <Background useBackround={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full bg-darkblue">
        <View className="absolute w-full h-full bg-darkblue" />
        <View className="mx-8 my-5">
          <View className="flex flex-col items-center  mb-5">
            <View className="flex flex-row items-center justify-between w-full">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="">
                <Feather
                  name="x"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
              <Text className="text-lg font-semibold text-center  text-white">
                Network Types
              </Text>
              <Feather
                name="more-vertical"
                size={20}
                color="white"
              />
            </View>
          </View>
        </View>

        {/* isi */}
        <View className="flex-1 items-center  justify-center">
          <View className="bg-white p-6 shadow-sm rounded-xl w-5/6 mx-auto mt-2">
            <View className="items-center">
              <Text className="text-black text-sm font-bold w-72 mb-2">
                That’s right.
              </Text>
              <Text className="text-black text-sm font-semibold w-72">
                The Small Office Home Office (SOHO) network allows computers in
                a home office or a remote office to connect to a corporate
                network, or access centralized, shared resources.
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("result")}>
            <Text className="text-white text-lg underline-offset-8 underline font-bold my-80">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
}
