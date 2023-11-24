import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import Background from "../components/Background";
import CyberSecuritySVG from '../../assets/course/cybersecurity.svg'
import OSITSVG from '../../assets/course/os-it.svg'
import NetworkingSVG from '../../assets/course/networking.svg'
import ProgrammingSVG from '../../assets/course/programming.svg'
import Ellipse1SVG from '../../assets/course/ellipse-1.svg'
import Ellipse2SVG from '../../assets/course/ellipse-2.svg'
import Ellipse3SVG from '../../assets/course/ellipse-3.svg'
import Ellipse4SVG from '../../assets/course/ellipse-4.svg'
import Svg, { Circle } from 'react-native-svg';

export default function Course() {
  return (
    <Background>
      <ScrollView className="flex flex-col mx-2 gap-y-6" showsVerticalScrollIndicator={false}>
        <Text className="w-full -mb-3 text-lg font-semibold text-center text-darkblue">Courses</Text>

        {/* course list */}
        <View className="flex flex-col w-full gap-y-3">

          {/* cyber */}
          <View className="flex flex-row justify-around px-1 py-3 rounded-lg bg-darkblue">
            <View className="absolute z-10 -left-2">
              <Ellipse1SVG />
            </View>
            <View className="absolute z-10 top-12 -left-2">
              <Ellipse2SVG />
            </View>
            <View className="flex flex-col mt-2">
              <Text className="text-white">5 chapters</Text>
              <Text className="text-lg font-bold text-white">Cybersecurity</Text>
            </View>
            <CyberSecuritySVG />
          </View>

          {/* os it */}
          <View className="flex flex-row justify-around px-1 py-3 rounded-lg bg-darkblue">
            <OSITSVG />
            <View className="flex flex-col mt-2">
              <Text className="text-right text-white">22 chapters</Text>
              <Text className="text-lg font-bold text-right text-white">OS & IT</Text>
            </View>
            <View className="absolute right-0 z-10">
              <Ellipse3SVG />
            </View>
            <View className="absolute right-0 z-10 top-8">
              <Ellipse4SVG />
            </View>
          </View>

          {/* network */}
          <View className="flex flex-row justify-around px-1 py-3 rounded-lg bg-darkblue">
            <View className="absolute z-10 -left-2">
              <Ellipse1SVG />
            </View>
            <View className="absolute z-10 top-12 -left-2">
              <Ellipse2SVG />
            </View>
            <View className="flex flex-col mt-2">
              <Text className="text-white">17 chapters</Text>
              <Text className="text-lg font-bold text-white">Networking</Text>
            </View>
            <NetworkingSVG />
          </View>

          {/* programming */}
          <View className="flex flex-row justify-around px-1 py-3 rounded-lg bg-darkblue">
            <ProgrammingSVG />
            <View className="flex flex-col mt-2">
              <Text className="text-right text-white">10 chapters</Text>
              <Text className="text-lg font-bold text-right text-white">Programming</Text>
            </View>
            <View className="absolute right-0 z-10">
              <Ellipse3SVG />
            </View>
            <View className="absolute right-0 z-10 top-8">
              <Ellipse4SVG />
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
