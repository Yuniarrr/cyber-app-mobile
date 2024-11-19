import { View, Text } from 'react-native'
import React from 'react'

export default function CourseProgressCard({ category, title, progress }) {
    return (
        <View className="flex flex-col px-3 py-2 border-2 border-light-gray rounded-lg gap-y-1">
            <Text className="px-1 text-xs font-semibold text-center bg-light-green text-green rounded-md w-1/3">{category}</Text>
            <Text className="text-base font-semibold">{title}</Text>
            <Text className="text-xs text-gray-chateau text-right mb-2">{progress}% completed</Text>
            <View className="w-full bg-light-gray rounded-full h-2.5">
                <View className="bg-darkblue h-2.5 rounded-full" style={{ width: `${progress}%` }}></View>
            </View>
        </View>
    )
}