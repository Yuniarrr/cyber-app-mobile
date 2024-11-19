import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import ColoredButton from '../../components/Button/ColoredButton';
import GoogleSVG from '../../../assets/logos_google.svg'
import FacebookSVG from '../../../assets/logos_facebook.svg'
import { useNavigation } from "@react-navigation/native";
import TextInputWithIcon from '../TextInput/TextInputWithIcon';

export default function AuthTemplate({ title, subTitle, isRegister }) {
    const navigation = useNavigation();

    const handlePress = () => {
        if (isRegister) navigation.navigate('login');
        else navigation.navigate('main');
    }

    const handlePressOpposite = () => {
        if (isRegister) navigation.navigate('login');
        else navigation.navigate('register');
    }

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
                    <Text className="text-2xl font-semibold">{title}</Text>
                    <Text className="text-base font-light text-gray-chateau">{subTitle}</Text>
                </View>
                <View className="flex flex-col w-full gap-y-6">
                    {!isRegister && (
                        <View className="w-full border-b-2 border-darkblue">
                            <Text className="mb-5 font-semibold text-center text-darkblue">Email</Text>
                        </View>
                    )}
                    {isRegister && (
                        <TextInputWithIcon placeholder={"Your Name"}>
                            <Ionicons
                                name="ios-person-outline"
                                size={20}
                                color="gray"
                            />
                        </TextInputWithIcon>
                    )}
                    <TextInputWithIcon placeholder={"Your Email"}>
                        <Ionicons
                            name="mail-outline"
                            size={20}
                            color="gray"
                        />
                    </TextInputWithIcon>
                    <TextInputWithIcon placeholder={"Your Password"} isPassword={true}>
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="gray"
                        />
                    </TextInputWithIcon>
                    {!isRegister && (
                        <Text className="font-bold tracking-wide text-darkblue">Forgot Password?</Text>
                    )}
                    <ColoredButton title={`${isRegister ? 'Sign Up' : 'Sign In'}`} buttonStyle={"bg-darkblue rounded-full w-full py-3 my-5"} titleStyle={"text-white text-center"} onPress={handlePress} />
                    {isRegister && (
                        <View className="flex flex-row flex-wrap items-center justify-center w-full">
                            <Text className="font-light">By signing up you agree to CyberShield's</Text>
                            <Text className="font-semibold">Terms of Services</Text>
                            <Text className="font-light"> and </Text>
                            <Text className="font-semibold">Privacy Policy.</Text>
                        </View>
                    )}
                </View>
                <View className="flex flex-col w-full gap-y-5">
                    {!isRegister && (
                        <View>
                            <Text className="w-full mb-3 font-light text-center text-gray-chateau">Or with email</Text>
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
                        </View>
                    )}
                    <View className="flex flex-row items-center justify-center w-full">
                        <Text>{`${isRegister ? 'Already have an account? ' : 'Dont have an account? '}`}</Text>
                        <Text className="font-bold" onPress={handlePressOpposite}>{`${isRegister ? 'Sign In' : 'Sign Up'}`}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}