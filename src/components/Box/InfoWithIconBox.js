import { View, Text } from 'react-native'
import React from 'react'

export default function InfoWithIconBox({ children, title, boxStyle, titleStyle }) {
    return (
        <View className={`flex flex-row items-center justify-center px-2 py-1 ${boxStyle}`}>
            {children}
            <Text className={`${titleStyle} font-semibold mx-2`}>{title}</Text>
        </View>
    )
}