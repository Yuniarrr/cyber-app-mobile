import { View, TextInput } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TextInputWithIcon({ children, placeholder, isPassword }) {
    return (
        <View className="flex flex-row items-center justify-between w-full px-4 py-2 my-1 border-2 rounded-lg border-gray-line">
            <View className="flex flex-row">
                {children}
                <TextInput placeholder={placeholder} className="ml-5" />
            </View>
            {isPassword && (
                <Ionicons
                    name="eye-off"
                    size={20}
                    color="gray"
                />
            )}
        </View>
    )
}