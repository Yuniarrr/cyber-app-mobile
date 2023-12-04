import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Background from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { quizData } from "../../components/quiz/data";

export default function Result() {
  const navigation = useNavigation();

  const correct = 80;
  const incorrect = 20;

  const calculatePercentage = (value, total) => {
    return (value / total) * 100;
  };

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
              <Feather
                name="share-2"
                size={20}
                color="white"
              />
            </View>
          </View>
        </View>

        {/* complete */}
        <View className="flex-1 items-center  justify-center">
          <View className="bg-white p-6 shadow-sm rounded-xl w-5/6 mx-auto mt-2">
            <View className="items-center">
              <Text className="text-gray-chateau text-xs mb-2 mx-1">
                Lesson Complete
              </Text>
              <Text className="text-black text-lg font-bold w-64 mb-2 text-center">
                Congratulations! You Passed!
              </Text>

              {/* diagram lingkaran wok */}
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  transform: [{ rotate: "-90deg" }],
                  overflow: "hidden",
                }}
                className="mt-2 bg-darkblue">
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: [
                      { translateX: -50 },
                      { translateY: 50 },
                      {
                        rotate: `${
                          calculatePercentage(correct, correct + incorrect) *
                          3.6
                        }deg`,
                      },
                      { translateX: 50 },
                      { translateY: -50 },
                    ],
                  }}
                  className="bg-blue-gray"
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  zIndex: 2,
                }}
                className="">
                {`${calculatePercentage(correct, correct + incorrect).toFixed(
                  1,
                )}%`}
              </Text>

              {/* keterangan */}
              <View className="flex-col mt-4">
              <View className="flex-row justify-between items-center w-64 mb-2">
                  <View className="flex-row">
                  <View className="bg-darkblue rounded-full w-4 h-4" />
                  <Text className="text-md text-gray-chateau mx-2">Right Answer</Text>
                  </View>
                  <Text className="text-md text-gray-chateau ">8</Text>
                </View>
                <View className="flex-row justify-between items-center w-64">
                  <View className="flex-row ">
                  <View className="bg-blue-gray rounded-full w-4 h-4" />
                  <Text className="text-md text-gray-chateau mx-2">Mistakes</Text>
                  </View>
                  <Text className="text-md text-gray-chateau">2</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("prequiz")} className="mx-auto">
              <View className="p-4 w-80 border border-white rounded-full mt-48">
                <Text className="text-center font-bold text-white">
                  Try Again
                </Text>
              </View>
            </TouchableOpacity>
      </ScrollView>
    </Background>
  );
}
