import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';

import SeeMoreCoursesBox from "../components/Box/SeeMoreCourseBox";

export default function SeeMorePopularCourses({ navigation }) {
  return (
    <Background>
      <ScrollView className="mx-3" showsVerticalScrollIndicator={false}>
        <View className="flex flex-row w-full m-1 mt-3">
          <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text className="mx-4 text-lg font-semibold text-center text-black font-inter ">Popular Courses</Text>
        </View>
        <View className="flex flex-col items-center justify-center mb-3">
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
