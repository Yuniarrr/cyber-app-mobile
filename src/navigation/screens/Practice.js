import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../../components/Background";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Practice({ navigation }) {
  const Data = [
    {
      id: "1",
      title: "Learn cybersec",
      description: "tes",
    },
    {
      id: "2",
      title: "Practice",
      description: "halo",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(Data);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = Data.filter((user) =>
      user.title.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredUsers(filteredData);
  };

  return (
    <Background>
      <View classname="container">
        <View
          id="header"
          className="flex-row items-start mt-20 justify-around h-full ">
          <View
            id="search"
            className="flex-wrap justify-around  items-center h-10  px-14 rounded-xl border bg-white">
            <Ionicons
              name="ios-search-outline"
              size={24}
              color="grey"
            />

            <TextInput
              className="w-full h-full mx-4"
              value={search}
              onChangeText={handleSearch}
              placeholder="Search In Chats..."
            />
          </View>
          <View
            id="belanja"
            className="ml-4">
            <Feather
              name="shopping-bag"
              size={38}
              color="black"
            />
          </View>
        </View>

        <View className=" rounded-md">
          <Text className="bg-yellow">HALOOO</Text>
        </View>

      </View>
      <StatusBar style="auto" />
    </Background>
  );
}
