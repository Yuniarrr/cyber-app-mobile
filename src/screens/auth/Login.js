import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import ColoredButton from '../../components/Button/ColoredButton';
import GoogleSVG from '../../../assets/logos_google.svg'
import FacebookSVG from '../../../assets/logos_facebook.svg'
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-col items-start justify-between flex-1 mx-4 my-5">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="arrow-back"
                        size={23}
                        color="black"
                    />
                </TouchableOpacity>
                <View className="flex flex-col gap-y-2">
                    <Text className="text-2xl font-semibold">Hi! Welcome Back</Text>
                    <Text className="text-base font-light text-gray-chateau">We happy to see you again! to use your account, you should sign in first.</Text>
                </View>
                <View className="flex flex-col w-full gap-y-6">
                    <View className="w-full border-b-2 border-darkblue">
                        <Text className="mb-5 font-semibold text-center text-darkblue">Email</Text>
                    </View>
                    <View className="flex flex-row items-center w-full px-4 py-2 border-2 rounded-lg border-gray-line">
                        <Ionicons
                            name="mail-outline"
                            size={20}
                            color="gray"
                        />
                        <TextInput placeholder='Your Email' className="ml-5" />
                    </View>
                    <View className="flex flex-row items-center justify-between w-full px-4 py-2 border-2 rounded-lg border-gray-line">
                        <View className="flex flex-row">
                            <Ionicons
                                name="lock-closed-outline"
                                size={20}
                                color="gray"
                            />
                            <TextInput placeholder='Your Password' className="ml-5" />
                        </View>
                        <Ionicons
                            name="eye-off"
                            size={20}
                            color="gray"
                        />
                    </View>
                    <Text className="font-bold tracking-wide text-darkblue">Forgot Password?</Text>
                </View>
                <ColoredButton title={"Sign In"} buttonStyle={"bg-darkblue rounded-full w-full py-3"} titleStyle={"text-white text-center"} />
                <View className="flex flex-col w-full gap-y-5">
                    <Text className="w-full font-light text-center text-gray-chateau">Or with email</Text>
                    <View className="flex flex-row items-center justify-around w-full">
                        <View className="flex flex-row items-center justify-center p-2 border-2 rounded-lg gap-x-2 border-gray-line">
                            <FacebookSVG />
                            <Text>Facebook</Text>
                        </View>
                        <View className="flex flex-row items-center justify-center p-2 border-2 rounded-lg gap-x-2 border-gray-line">
                            <GoogleSVG />
                            <Text>Google</Text>
                        </View>
                    </View>
                    <View className="flex flex-row items-center justify-center w-full">
                        <Text>Don't have an account? </Text>
                        <Text className="font-bold">Sign Up</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}