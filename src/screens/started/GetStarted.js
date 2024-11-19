import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import LightBulbSVG from '../../../assets/light-bulb.svg'
import GoogleSVG from '../../../assets/google.svg'
import FacebookSVG from '../../../assets/facebook.svg'
import ColoredButton from '../../components/Button/ColoredButton';
import { useNavigation } from "@react-navigation/native";

export default function GetStarted() {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex flex-col items-center justify-center flex-1 bg-white gap-y-4">
            <LightBulbSVG />
            <View className="flex flex-col gap-y-2">
                <Text className="text-2xl font-bold text-center">Welcome to CyberShield</Text>
                <Text className="text-base font-light text-center text-gray-chateau">One Lesson at a Time with CyberShield</Text>
            </View>
            <View className="flex items-center justify-center w-full">
                <ColoredButton title={"Get Started"} buttonStyle={"bg-darkblue w-2/3 py-2.5"} titleStyle={"text-white text-center text-base"} onPress={() => navigation.navigate('login')} />
            </View>
            <View className="flex items-center justify-center w-full">
                <View className="absolute w-5/6 h-2 mx-3 border-b-2 border-gray-chateau" />
                <Text className="px-2 bg-white text-gray-chateau">Sign in with</Text>
            </View>
            <View className="flex flex-row items-center justify-center w-full gap-x-2">
                <GoogleSVG />
                <FacebookSVG />
            </View>
            <View className="flex flex-row items-center justify-center w-full">
                <Text>Don't have an account? </Text>
                <Text className="font-bold" onPress={() => navigation.navigate('register')}>Sign Up</Text>
            </View>
        </SafeAreaView>
    )
}