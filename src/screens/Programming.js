import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import BoxComingsoon from "../components/Box/BoxComingsoon";

export default function Programming() {
  const navigation = useNavigation();
  return (
  <View>
    <ScrollView>
      <View className="relative"> 
        <Image
            source={require("../../assets/headerbiru.png")}
            className="w-full top-0"/>
              <TouchableOpacity
              className="absolute top-14 left-4"
              onPress={() => navigation.navigate("main")}>
              <Feather
                name="arrow-left"
                size={25}
                color="white"
              />
            </TouchableOpacity>
        <Text className="text-lg font-semibold text-center absolute top-14 right-36 text-white">
                Programming
              </Text>
              {/* masukin box */}
        {/* <View className="flex flex-col items-center mt-28">
        <Image
            source={require("../../assets/soon.png")}
            className=""/>
              <Text className="font-inter text-center font-bold text-2xl text-black"> There are no courses yet</Text>
              <Text className="font-inter text-center text-lg text-[#97A9BD]"> The course you are looking for is currently in development and will be available soon. In the meantime, we encourage you to explore other courses that are already available. </Text>
        </View> */}

        {/* coba */}
        <BoxComingsoon
            img={require("../../assets/soon.png")}
            text1="Something big is coming!"
            text2="The thing you are looking for is currently in development and will be available soon. In the meantime, we encourage you to explore other courses that are already available."
        />


        </View>
        </ScrollView>
      </View>
     
  );
}
