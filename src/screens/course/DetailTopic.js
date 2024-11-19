import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../../components/Background";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function DetailTopic() {
  const navigation = useNavigation();
  return (
    <Background useBackround={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-darkblue">
        <View className="mx-3 my-5">
          {/* header */}
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
              <TouchableOpacity>
                <Feather
                  name="info"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* content */}
          <View className="flex flex-col w-full px-2 pb-2 bg-white rounded-xl gap-y-2">
            <View className="flex flex-col p-2 gap-y-2">
              <Text className="text-lg font-bold text-darkblue">
                2.0.1 Webster - Why Should I Take this Module?
              </Text>
              <Text className="px-4 pt-4 font-light leading-5 border-2 rounded-xl border-light-gray">
                Kishori does not yet understand network infrastructure device
                roles in the network, including end devices, intermediate
                devices, and network media. When she first started her nursing
                career, she was writing patient medical notes in a paper
                notebook! At home, Kishori only has a laptop, a smartphone, and
                a tablet. This makes her most familiar with end devices, or
                hosts. She understands that those devices are connected to the
                internet somehow through that box in the corner of her living
                room. At work she uses a laptop, a desktop, a printer, and other
                network-connected hospital equipment.{" "}
              </Text>
            </View>

            <View className="flex flex-col p-2 gap-y-2">
              <Text className="text-lg font-bold text-darkblue">
                2.0.1 Webster - Why Should I Take this Module?
              </Text>
              <Text className="px-4 pt-4 font-light leading-5 border-2 rounded-xl border-light-gray">
                Kishori does not yet understand network infrastructure device
                roles in the network, including end devices, intermediate
                devices, and network media. When she first started her nursing
                career, she was writing patient medical notes in a paper
                notebook! At home, Kishori only has a laptop, a smartphone, and
                a tablet. This makes her most familiar with end devices, or
                hosts. She understands that those devices are connected to the
                internet somehow through that box in the corner of her living
                room. At work she uses a laptop, a desktop, a printer, and other
                network-connected hospital equipment.{" "}
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("prequiz")}>
              <View className="p-4 bg-darkblue rounded-full">
                <Text className="text-center font-bold text-white">
                  Check Your Understanding!
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
