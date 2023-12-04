import * as React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';

import SeeMoreCoursesBox from "../components/Box/SeeMoreCourseBox";

export default function SeeMoreSuggestion({ navigation }) {
  return (
    <Background>
    <ScrollView>
      <View className="flex flex-row m-1 w-full">
        <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text className="text-black text-center font-inter text-lg font-semibold mx-4 ">Suggestion For you</Text>
      </View>
      <View className="flex flexcol py-2 items-center justify-center">
        <SeeMoreCoursesBox
              imageSource={require('../../assets/Popular_Courses2.jpeg')}
              category="Cybersecurity"
              title="Introduction to Cyber Security: Cyber Security"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-light-green text-green"
          />
          <SeeMoreCoursesBox
              imageSource={require('../../assets/Popular_Courses1.jpeg')}
              category="Finance"
              title="Master Digital Product Design: UX Research"
              price={70.1}
              rating={4.7}
              totalReviews={1882}
              backgroundColor="bg-light-red text-red"
          />
          <SeeMoreCoursesBox
              imageSource={require('../../assets/Suggestion_1.jpeg')}
              category="Finance"
              title="The Complete Investment Banking Course 2023"
              price={65.7}
              rating={4.5}
              totalReviews={1395}
              backgroundColor="bg-light-red text-red"
            />
      </View>
    </ScrollView>  
    </Background>
  );
}
