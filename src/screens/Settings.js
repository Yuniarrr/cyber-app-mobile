import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from "../components/Background";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import ItemWithIconArrow from '../components/Box/ItemWithIconArrow';
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
    const navigation = useNavigation();

    return (
        <Background>
            <View className="flex flex-col items-start justify-start pt-5 m-5 gap-y-6">

                {/* profile */}
                <View className="flex flex-row items-center justify-center">
                    <TouchableOpacity className="absolute left-0 z-10" onPress={() => navigation.goBack()}>
                        <Ionicons
                            name="arrow-back"
                            size={23}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text className="w-full text-lg font-semibold text-center">Profile</Text>
                </View>

                <View className="flex flex-col w-full gap-y-3">
                    <View className="border-2 rounded-lg border-light-gray">
                        <ItemWithIconArrow title={"Personal Details"}>
                            <Ionicons
                                name="person-outline"
                                size={23}
                                color="#9CA3AF"
                            />
                        </ItemWithIconArrow>
                    </View>

                    <View className="border-2 rounded-lg border-light-gray">
                        <ItemWithIconArrow title={"FAQs"}>
                            <AntDesign
                                name="questioncircleo"
                                size={23}
                                color="#9CA3AF"
                            />
                        </ItemWithIconArrow>
                        <View className="mx-3 border-b-2 border-light-gray" />
                        <ItemWithIconArrow title={"Help Center"}>
                            <MaterialCommunityIcons
                                name="headset"
                                size={23}
                                color="#9CA3AF"
                            />
                        </ItemWithIconArrow>
                    </View>

                    <View className="border-2 rounded-lg border-light-gray">
                        <ItemWithIconArrow title={"Language"}>
                            <Ionicons
                                name="ios-globe-outline"
                                size={23}
                                color="#9CA3AF"
                            />
                        </ItemWithIconArrow>
                        <View className="mx-3 border-b-2 border-light-gray" />
                        <ItemWithIconArrow title={"Privacy"}>
                            <Octicons
                                name="shield-check"
                                size={23}
                                color="#9CA3AF"
                            />
                        </ItemWithIconArrow>
                        <View className="mx-3 border-b-2 border-light-gray" />
                        <ItemWithIconArrow title={"Notifications"}>
                            <Octicons
                                name="bell"
                                size={23}
                                color="#9CA3AF"
                            />
                        </ItemWithIconArrow>
                    </View>

                    <View className="border-2 rounded-lg border-light-gray">
                        <ItemWithIconArrow title={"Rate Courser"}>
                            <AntDesign
                                name="staro"
                                size={23}
                                color="#9CA3AF"
                            />
                        </ItemWithIconArrow>
                    </View>
                </View>
            </View>
        </Background>
    )
}