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
      </View>
      {/* tabel explor topic */}
      <View className="flex flex-col m-1">
        <View className="flex flex-row">
          <HomeMenuTopicBox buttonText="CyberSecurity"/>
          <HomeMenuTopicBox buttonText="Networking"/>
        </View>
        <View className="flex flex-row">
          <HomeMenuTopicBox buttonText="OS&IT"/>
          <HomeMenuTopicBox buttonText="Programming"/>
        </View>
      </View>
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-darkblue text-left font-inter text-base font-bold">Popular Courses</Text>
        <TouchableOpacity>
          <Text className="text-gray font-normal text-sm" onPress={() => navigation.navigate('seemorepopularcourses')}>See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
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
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-darkblue text-left font-inter text-base font-bold">Suggestion For You</Text>
        <TouchableOpacity>
          <Text className="text-gray font-normal text-sm" onPress={() => navigation.navigate('seemoresuggestion')}>See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
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
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-darkblue text-left font-inter text-base font-bold">Did You Know?</Text>
        <TouchableOpacity>
          <Text className="text-gray font-normal text-sm"  onPress={() => navigation.navigate('seemoredidyouknow')}>See More</Text>
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

