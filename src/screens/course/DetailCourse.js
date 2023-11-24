import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import HeaderCyberSec from '../../../assets/course/header-cybersecurity.svg'
import Chapters from '../../../assets/course/chapters.svg'
import Topics from '../../../assets/course/topics.svg'
import Topic1 from '../../../assets/course/topic-1.svg'

const data = [
    {
        topic: 'The World of Cybersecurity',
        id: 1
    },
    {
        topic: 'Organizational Data',
        id: 2
    },
    {
        topic: 'What was taken?',
        id: 3
    }
]

export default function DetailCourse() {
    const navigation = useNavigation();

    return (
        <Background useBackround={true}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* header */}
                <View className="absolute w-screen bg-darkblue" style={{ height: 338 }} />
                <View className="mx-3 my-5">
                    <View className="flex flex-col items-start justify-around mx-2 mb-5 gap-y-4">
                        <View className="flex flex-row items-center justify-start">
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="absolute z-10">
                                <Feather
                                    name="arrow-left"
                                    size={20}
                                    color="white"
                                />
                            </TouchableOpacity>
                            <Text className="w-full text-lg font-semibold text-center text-white">
                                Cybersecurity
                            </Text>
                        </View>
                        <HeaderCyberSec width={"100%"} />
                        <View className="flex flex-row items-center justify-around w-full py-1 bg-white rounded-lg">
                            <View className="flex flex-row items-center gap-x-1">
                                <Chapters />
                                <Text className="text-xs font-medium">5 Chapters</Text>
                            </View>
                            <View className="h-full border-l-2 border-light-gray" />
                            <View className="flex flex-row items-center gap-x-2">
                                <Topics />
                                <Text className="text-xs font-medium">18 Sub Topics</Text>
                            </View>
                        </View>
                    </View>

                    {/* topic list */}
                    <View className="flex flex-col gap-y-2">
                        <View className="flex flex-col gap-y-2">
                            <View className="flex flex-row items-center justify-between">
                                <View className="flex flex-row items-center gap-x-2">
                                    <Text className="bg-[#3B88C3] text-white py-0.5 px-1 rounded-md font-bold">1</Text>
                                    <Text className="font-semibold">Introduction to Cybersecurity</Text>
                                </View>
                                <View className="flex flex-row gap-x-1">
                                    <Text className="text-[#42AAFF]">See All</Text>
                                    <Text className="text-[#42AAFF]">{'>'}</Text>
                                </View>
                            </View>
                            <FlatList
                                nestedScrollEnabled
                                horizontal
                                data={data}
                                renderItem={({ item }) => (
                                    <View className="flex flex-col items-center justify-center w-32 py-3 rounded-md shadow-sm shadow-[#e0dddd]">
                                        <Topic1 />
                                        <Text className="mx-1 font-medium text-center">{item.topic}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id}
                                ItemSeparatorComponent={() => (
                                    <View
                                        style={{
                                            width: 5,
                                        }}
                                    />
                                )}
                            />
                        </View>

                        {/* list 2 */}
                        <View className="flex flex-col gap-y-2">
                            <View className="flex flex-row items-center justify-between">
                                <View className="flex flex-row items-center gap-x-2">
                                    <Text className="bg-[#3B88C3] text-white py-0.5 px-1 rounded-md font-bold">1</Text>
                                    <Text className="font-semibold">Introduction to Cybersecurity</Text>
                                </View>
                                <View className="flex flex-row gap-x-1">
                                    <Text className="text-[#42AAFF]">See All</Text>
                                    <Text className="text-[#42AAFF]">{'>'}</Text>
                                </View>
                            </View>
                            <FlatList
                                nestedScrollEnabled
                                horizontal
                                data={data}
                                renderItem={({ item }) => (
                                    <View className="flex flex-col items-center justify-center w-32 py-3 rounded-md shadow-sm shadow-[#e0dddd]">
                                        <Topic1 />
                                        <Text className="mx-1 font-medium text-center">{item.topic}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id}
                                ItemSeparatorComponent={() => (
                                    <View
                                        style={{
                                            width: 5,
                                        }}
                                    />
                                )}
                            />
                        </View>

                        {/* list 3 */}
                        <View className="flex flex-col gap-y-2">
                            <View className="flex flex-row items-center justify-between">
                                <View className="flex flex-row items-center gap-x-2">
                                    <Text className="bg-[#3B88C3] text-white py-0.5 px-1 rounded-md font-bold">1</Text>
                                    <Text className="font-semibold">Introduction to Cybersecurity</Text>
                                </View>
                                <View className="flex flex-row gap-x-1">
                                    <Text className="text-[#42AAFF]">See All</Text>
                                    <Text className="text-[#42AAFF]">{'>'}</Text>
                                </View>
                            </View>
                            <FlatList
                                nestedScrollEnabled
                                horizontal
                                data={data}
                                renderItem={({ item }) => (
                                    <View className="flex flex-col items-center justify-center w-32 py-3 rounded-md shadow-sm shadow-[#e0dddd]">
                                        <Topic1 />
                                        <Text className="mx-1 font-medium text-center">{item.topic}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id}
                                ItemSeparatorComponent={() => (
                                    <View
                                        style={{
                                            width: 5,
                                        }}
                                    />
                                )}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Background>
    )
}