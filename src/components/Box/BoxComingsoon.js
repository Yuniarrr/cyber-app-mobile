import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

const BoxComingsoon = ({ img, text1, text2 }) => {
  return (
    // <TouchableOpacity className=" " onPress={onPress}>
    <View className="flex flex-col items-center mt-28">
    <Image source={img} className=""/>
          <Text className="font-inter text-center font-bold text-2xl text-black">{text1}</Text>
          <Text className="font-inter text-center text-lg text-[#97A9BD]">{text2} </Text>
    </View>
    // </TouchableOpacity>
  );
};

export default BoxComingsoon;