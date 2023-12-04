import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Background from "../../components/Background";
import HeaderCyberSec from "../../../assets/course/header-cybersecurity.svg";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Chapters from "../../../assets/course/chapters.svg";

export default function Quiz1() {
  const navigation = useNavigation();
 const [selectedOption, setSelectedOption] = useState(null);

 const handleCheck = (option) => {
  setSelectedOption(option);
  navigation.navigate('quiz-2', { selectedOption: option });
};

// const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <Background useBackround={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full bg-darkblue ">
        <View className="absolute w-full h-full bg-darkblue" />
        <View className="mx-8 my-5">
          <View className="flex flex-col items-center  mb-5 gap-y-4">
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

{/* question */}
        <View className="flex-1 items-center justify-center">
          <View className="bg-white p-6 shadow-sm rounded-xl w-5/6 mx-auto mt-2">
            <Text className="text-gray-chateau text-xs mb-2 mx-1">
              Question 1 of 2
            </Text>
            <View className="items-center">
              <Text className="text-black text-sm font-semibold mb-2 w-72">
                What type of network allows computers in a home office or a
                remote office to connect to a corporate network?
              </Text>

{/* quiz */}
<TouchableOpacity onPress={() => handleCheck('option1')}>
        <View className={`border border-gray-chateau rounded-xl p-4 w-72 flex-row items-center mb-2`}>
          <TouchableOpacity>
            <View
              className={`w-6 h-6 mx-2 border rounded-full flex items-center justify-center ${
                selectedOption === 'option1' ? 'bg-darkblue' : ''
              }`}>
              {selectedOption === 'option1' && <Text className="text-white">✓</Text>}
            </View>
          </TouchableOpacity>
          <Text className="font-semibold text-sm mx-2">Small office</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCheck('option2')}>
        <View className={`border border-gray-chateau rounded-xl p-4 w-72 flex-row items-center mb-2`}>
          <TouchableOpacity>
            <View
              className={`w-6 h-6 mx-2 border rounded-full flex items-center justify-center ${
                selectedOption === 'option2' ? 'bg-darkblue' : ''
              }`}>
              {selectedOption === 'option2' && <Text className="text-white">✓</Text>}
            </View>
          </TouchableOpacity>
          <Text className="font-semibold text-sm mx-2">Smart home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCheck('option3')}>
        <View className={`border border-gray-chateau rounded-xl p-4 w-72 flex-row items-center mb-2`}>
          <TouchableOpacity>
            <View
              className={`w-6 h-6 mx-2 border rounded-full flex items-center justify-center ${
                selectedOption === 'option3' ? 'bg-darkblue' : ''
              }`}>
              {selectedOption === 'option3' && <Text className="text-white">✓</Text>}
            </View>
          </TouchableOpacity>
          <Text className="font-semibold text-sm mx-2">World wide</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCheck('option4')}>
        <View className={`border border-gray-chateau rounded-xl p-4 w-72 flex-row items-center mb-2`}>
          <TouchableOpacity>
            <View
              className={`w-6 h-6 mx-2 border rounded-full flex items-center justify-center ${
                selectedOption === 'option4' ? 'bg-darkblue' : ''
              }`}>
              {selectedOption === 'option4' && <Text className="text-white">✓</Text>}
            </View>
          </TouchableOpacity>
          <Text className="font-semibold text-sm mx-2">Medium</Text>
        </View>
      </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
