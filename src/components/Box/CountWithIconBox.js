import { View, Text } from 'react-native'
import React from 'react'

export default function CountWithIconBox({ children, count, title, countStyle, boxStyle }) {
  return (
    <View className={`flex flex-col items-center rounded-lg justify-center pb-3 gap-y-2 ${boxStyle}`}>
      <View className="flex flex-row items-center justify-center">
        {children}
        <Text className={`text-lg font-bold ${countStyle}`}>{count}</Text>
      </View>
      <Text className="font-bold text-pale-sky">{title}</Text>
    </View>
  )
}