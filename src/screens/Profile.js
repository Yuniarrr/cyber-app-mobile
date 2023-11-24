import * as React from "react";
import { View, Text, FlatList } from "react-native";
import Background from "../components/Background";
import Ionicons from "@expo/vector-icons/Ionicons";
import GreenFlagSVG from '../../assets/green-flag.svg';
import GrayFlagSVG from '../../assets/gray-flag.svg';
import FlashSVG from '../../assets/flash.svg';
import RecentSVG from '../../assets/recent.svg';
import GraphSVG from '../../assets/graph.svg';
import CountWithIconBox from "../components/Box/CountWithIconBox";
import InfoWithIconBox from "../components/Box/InfoWithIconBox";
import CourseProgressCard from "../components/Card/CourseProgressCard";

const data = [
  {
    id: 1,
    category: "Networking",
    title: "Network Components, Types, and Connections",
    progress: 75,
  },
  {
    id: 2,
    category: "Cyber Security",
    title: "Attacks, Concepts and Techniques",
    progress: 60,
  },
]

export default function Profile({ navigation }) {
  return (
    <Background>
      <View className="flex flex-col items-start justify-start mx-2 gap-y-6">
        <Text className="w-full text-lg font-semibold text-center">Profile</Text>

        {/* username and settings */}
        <View className="mx-3">
          <View className="flex flex-row items-center justify-between w-full">
            <View className="flex flex-row items-center gap-x-3">
              {/* <Image source={require("../../../assets/avatar.png")} /> */}
              <Ionicons
                name="person-circle-outline"
                size={40}
                color="#9CA3AF"
              />
              <View className="flex flex-col gap-y-1">
                <Text className="text-base font-bold tracking-wide">
                  Keisya Nabila
                </Text>
                <Text className="text-xs font-light tracking-wider text-gray-chateau">
                  keisya09@gmail.com
                </Text>
              </View>
            </View>
            <Ionicons
              name="settings-outline"
              size={25}
              color="#9CA3AF"
            />
          </View>
        </View>

        {/* course complete and days streak */}
        <View className="flex flex-row items-center justify-around w-full">
          <CountWithIconBox count="11" countStyle={"text-green"} title="Course Completed" boxStyle="bg-light-green w-1/2 mr-2">
            <GreenFlagSVG />
          </CountWithIconBox>
          <CountWithIconBox count="4" countStyle={"text-yellow"} title="Days Streak" boxStyle="bg-light-yellow w-1/2 ml-2">
            <FlashSVG />
          </CountWithIconBox>
        </View>

        {/* recent, goals, activity */}
        <View className="flex flex-row items-center justify-around w-full">
          <InfoWithIconBox title={"Recent"} boxStyle={"bg-darkblue rounded-lg"} titleStyle={"text-white"}>
            <RecentSVG />
          </InfoWithIconBox>
          <InfoWithIconBox title={"Goals"} boxStyle={"bg-white rounded-lg"} titleStyle={"text-pale-sky"}>
            <GrayFlagSVG />
          </InfoWithIconBox>
          <InfoWithIconBox title={"Activity"} boxStyle={"bg-white rounded-lg"} titleStyle={"text-pale-sky"}>
            <GraphSVG />
          </InfoWithIconBox>
        </View>

        {/* list course */}
        <View className="flex flex-col w-full mt-3">
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View className="my-1">
                <CourseProgressCard category={item.category} title={item.title} progress={item.progress} />
              </View>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  marginVertical: 8,
                }}
              />
            )}
          />
        </View>
      </View>
    </Background>
  );
}