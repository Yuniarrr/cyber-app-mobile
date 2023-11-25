import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LogoSVG from '../../../assets/logo.svg'
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
    const navigation = useNavigation();

    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('on-boarding-1')
        }, 2000)
    }, []);

    return (
        <SafeAreaView className="flex flex-col items-center justify-center flex-1 bg-darkblue gap-y-2">
            <LogoSVG />
            <Text className="text-xl font-bold text-white">CyberShield</Text>
            <Text className="font-medium text-white">Unlock your potential with us!</Text>
        </SafeAreaView>
    )
}