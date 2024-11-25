import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather";
import MiniLogoSVG from '../../../assets/mini-logo.svg'
import { SafeAreaView } from "react-native-safe-area-context";
import ColoredButton from "../Button/ColoredButton";

export default function OnBoardingTemplate({ children, title, subTitle, onPress, next }) {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-col items-start justify-between flex-1 mx-5 my-5">
                <View className="flex flex-row items-center justify-start gap-x-2">
                    <MiniLogoSVG />
                    <Text className="text-xl font-bold tracking-wider text-darkblue">CyberShield</Text>
                </View>
                <View className="flex-row items-center justify-center w-full">
                    {children}
                </View>
                <View className="flex flex-col gap-y-2">
                    <Text className="text-3xl font-bold text-darkblue">{title}</Text>
                    <Text className="text-lg font-light text-gray-chateau">{subTitle}</Text>
                </View>
                <View className="flex flex-col w-full gap-y-6">
                    <View className={`w-full h-1.5 rounded-full ${next ? 'bg-darkblue' : 'bg-light-gray'}`}>
                        <View className={`h-1.5 rounded-full ${next ? 'bg-light-gray' : 'bg-darkblue'}`} style={{ width: `50%` }}></View>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        <View className="p-3 rounded-full bg-darkblue">
                            <Feather
                                name="arrow-right"
                                size={30}
                                color="white"
                            />
                        </View>
                        <ColoredButton title={"Continue"} onPress={onPress} buttonStyle={"p-20 py-3"} titleStyle={"text-darkblue text-lg"} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}