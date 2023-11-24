import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Background from '../components/Background';
import ColoredHeader from '../components/ColoredHeader';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ColoredHeader>
    <ScrollView>
      {/* nama */}
      <View className=" justify-center pl-6">
        <Text className="text-white text-left font-inter text-base font-bold">Hello, Keisya</Text>
        <Text className="text-white text-left font-inter text-xs font-normal">Upgrade your skill for better futures!</Text>
      </View>
      {/* search */}
      <TouchableOpacity
        className="flex-row items-center p-3 rounded-lg  m-4 bg-[#394169] border border-[#8b91a3]" onPress={() => navigation.navigate('search')}>
        <Ionicons name="search-outline" size={22} color="white" />
        <TextInput
          className="flex-1 ml-2 text-[#9CA3AF] text-sm font-normal"
          placeholder="What do you want to learn?"
          placeholderTextColor="white"
          editable={false} // Membuat TextInput tidak dapat diedit
        />
      {/* continue learning */}
      </TouchableOpacity>
      <View className=" justify-center py-2 px-4">
      <Text className="text-white text-left font-inter text-base font-bold">Continue Learning</Text>
      </View>
      <TouchableOpacity className="flex-none items-start box-border h-40 w-30 p-4 rounded-lg m-4 bg-[#FFF] border-2 border-light-gray shadow-xl"> 
        <View className="flex flex-col w-full">
            <Text className="px-1 text-xs font-semibold text-center bg-light-green text-green rounded-md w-1/3">Networking</Text>
            <Text className="text-base font-semibold">Network Components, Types, and Connections</Text>
            <Text className="text-xs text-gray-chateau text-right mb-2">75% completed</Text>
            <View className="w-full bg-light-gray rounded-full h-2.5">
              <View className="bg-darkblue h-2.5 rounded-full" style={{ width: "45%" }}></View>
            </View>
        </View>
      </TouchableOpacity>
      {/* explore topic */}
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-darkblue text-left font-inter text-base font-bold">Explore Topic</Text>
        <TouchableOpacity>
          <Text className="text-gray font-normal text-sm">See More</Text>
        </TouchableOpacity>
      </View>
      {/* tabel explor topic */}
      <View className="flex flex-col m-1">
        <View className="flex flex-row">
          <View className="flex-1 m-2">
            {/* nyoba doank */}
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-14 w-44" onPress={() => navigation.navigate('search')} > 
            {/* <View className="flex flex-row">
              <View className="mr-2 pb-3">
                <Image source={require("../../assets/cybersec.png")} style={{ width: 35, height: 35 }} className="pb-3" />
              </View> */}
              <Text>Testing</Text>
            {/* </View> */}
            </TouchableOpacity>
          </View>
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-14 w-44">
              <Text>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row">
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-14 w-44">
              <Text>Testing</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-14 w-44">
              <Text>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-darkblue text-left font-inter text-base font-bold">Popular Courses</Text>
        <TouchableOpacity>
          <Text className="text-gray font-normal text-sm">See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View className="flex flex-row">
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-80 w-60 gap-x-1 ">
            </TouchableOpacity>
          </View>
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-80 w-60 gap-x-1">
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </ScrollView>
    </ColoredHeader>
  );

}

