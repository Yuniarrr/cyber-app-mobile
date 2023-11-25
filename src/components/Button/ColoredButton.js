import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ColoredButton({ onPress, title, buttonStyle, titleStyle }) {
    return (
        <TouchableOpacity className={`rounded-3xl bg-blue-gray ${buttonStyle}`} onPress={onPress}>
            <Text className={`font-bold ${titleStyle}`}>{title}</Text>
        </TouchableOpacity>
    )
}