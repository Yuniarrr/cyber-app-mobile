import * as React from "react";
import { View, Text } from "react-native";
import Background from "../components/Background";
import Ionicons from "@expo/vector-icons/Ionicons";
import GreenFlagSVG from '../../assets/green-flag.svg';
import GrayFlagSVG from '../../assets/gray-flag.svg';
import FlashSVG from '../../assets/flash.svg';
import RecentSVG from '../../assets/recent.svg';
import GraphSVG from '../../assets/graph.svg';
import CountWithIconBox from "../components/Box/CountWithIconBox";
import InfoWithIconBox from "../components/Box/InfoWithIconBox";

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
        <View className="flex flex-col w-full">
          <View className="flex flex-col px-3 py-2 border-2 border-light-gray rounded-lg gap-y-1">
            <Text className="px-1 text-xs font-semibold text-center bg-light-green text-green rounded-md w-1/3">Networking</Text>
            <Text className="text-base font-semibold">Network Components, Types, and Connections</Text>
            <Text className="text-xs text-gray-chateau text-right mb-2">75% completed</Text>
            <View className="w-full bg-light-gray rounded-full h-2.5">
              <View className="bg-darkblue h-2.5 rounded-full" style={{ width: "45%" }}></View>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
}