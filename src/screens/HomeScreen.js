import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Background from '../components/Background';
import ColoredHeader from '../components/ColoredHeader';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Icon } from '@iconify/react';


import HomeMenuCoursesBox from "../components/Box/HomeMenuCoursesBox";
import HomeMenuArticleBox from "../components/Box/HomeMenuArticleBox";
import HomeMenuTopicBox from '../components/Box/HomeMenuTopicBox';
// import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    // <ColoredHeader>
    <Background>
      <ScrollView>
        <View className="absolute top-0 w-full h-1/5 bg-darkblue" />
        {/* nama */}
        <View className="justify-center pl-6 mt-5">
          <Text className="text-base font-bold text-left text-white font-inter">Hello, Keisya</Text>
          <Text className="text-xs font-normal text-left text-white font-inter">Upgrade your skill for better futures!</Text>
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
        <View className="justify-center px-4 py-2 ">
          <Text className="text-base font-bold text-left text-white font-inter">Continue Learning</Text>
        </View>
        <TouchableOpacity className="flex-none items-start box-border h-40 w-30 p-4 rounded-lg m-4 bg-[#FFF] border-2 border-light-gray shadow-xl">
          <View className="flex flex-col w-full">
            <Text className="w-1/3 px-1 text-xs font-semibold text-center rounded-md bg-light-green text-green">Networking</Text>
            <Text className="text-base font-semibold">Network Components, Types, and Connections</Text>
            <Text className="mb-2 text-xs text-right text-gray-chateau">75% completed</Text>
            <View className="w-full bg-light-gray rounded-full h-2.5">
              <View className="bg-darkblue h-2.5 rounded-full" style={{ width: "45%" }}></View>
            </View>
          </View>
        </TouchableOpacity>
        {/* explore topic */}
        <View className="flex-row items-center justify-between px-4 py-2">
          <Text className="text-base font-bold text-left text-darkblue font-inter">Explore Topic</Text>
          <TouchableOpacity onPress={() => navigation.navigate('seemorepopularcourses')}>
            <Text className="text-sm font-normal text-gray">See More</Text>
          </TouchableOpacity>
        </View>
        {/* tabel explor topic */}
        <View className="flex flex-col m-1 mx-4 gap-y-2">
          <View className="flex flex-row w-1/2">
            <HomeMenuTopicBox buttonText="CyberSecurity" />
            <HomeMenuTopicBox buttonText="Networking" />
          </View>
          <View className="flex flex-row w-1/2">
            <HomeMenuTopicBox buttonText="OS&IT" />
            <HomeMenuTopicBox buttonText="Programming" />
          </View>
        </View>
        <View className="flex-row items-center justify-between px-4 py-2">
          <Text className="text-base font-bold text-left text-darkblue font-inter">Popular Courses</Text>
          <TouchableOpacity onPress={() => navigation.navigate('seemorepopularcourses')}>
            <Text className="text-sm font-normal text-gray">See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} className="mx-3">
          <View className="flex flex-row">
            <View className="flex-1 m-2">
              <HomeMenuCoursesBox
                imageSource={require('../../assets/Popular_Courses2.jpeg')}
                category="Cybersecurity"
                title="Introduction to Cyber Security: Cyber Security"
                price={88.5}
                rating={4.9}
                totalReviews={2395}
                backgroundColor="bg-light-green text-green"
              />
            </View>
            <View className="flex-1 m-2">
              <HomeMenuCoursesBox
                imageSource={require('../../assets/Popular_Courses1.jpeg')}
                category="Finance"
                title="Master Digital Product Design: UX Research"
                price={70.1}
                rating={4.7}
                totalReviews={1882}
                backgroundColor="bg-light-red text-red"
              />
            </View>
          </View>
        </ScrollView>
        <View className="flex-row items-center justify-between px-4 py-2">
          <Text className="text-base font-bold text-left text-darkblue font-inter">Suggestion For You</Text>
          <TouchableOpacity onPress={() => navigation.navigate('seemoresuggestion')}>
            <Text className="text-sm font-normal text-gray">See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} className="mx-3">
          <View className="flex flex-row">
            <View className="flex-1 m-2">
              <HomeMenuCoursesBox
                imageSource={require('../../assets/Suggestion_1.jpeg')}
                category="Finance"
                title="The Complete Investment Banking Course 2023"
                price={65.7}
                rating={4.5}
                totalReviews={1395}
                backgroundColor="bg-light-red text-red"
              />
            </View>
            <View className="flex-1 m-2">
              <HomeMenuCoursesBox
                imageSource={require('../../assets/Popular_Courses2.jpeg')}
                category="Cybersecurity"
                title="Introduction to Cyber Security: Cyber Security"
                price={88.5}
                rating={4.9}
                totalReviews={2395}
                backgroundColor="bg-light-green text-green"
              />
            </View>
          </View>
        </ScrollView>
        <View className="flex-row items-center justify-between px-4 py-2">
          <Text className="text-base font-bold text-left text-darkblue font-inter">Did You Know?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('seemoredidyouknow')}>
            <Text className="text-sm font-normal text-gray">See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          <View className="flex flex-row">
            <View className="flex-1 m-2">
              <HomeMenuArticleBox
                imageSource={require('../../assets/Article1.jpeg')}
                category="Web"
                title="Guide to Integrate API in Back End Development"
                backgroundColor="bg-light-yellow text-yellow"
              />
            </View>
            <View className="flex-1 m-2">
              <HomeMenuArticleBox
                imageSource={require('../../assets/Article2.jpeg')}
                category="Mobile"
                title="Unleashing the Potential of Mobile Development"
                backgroundColor="bg-light-blue text-blue"
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </Background>

  );
}