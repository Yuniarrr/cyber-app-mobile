import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
//import Background from '../../components/Background';
import ColoredHeader from '../../components/ColoredHeader';
import Search from "screens/Search"

export default function HomeScreen({ navigation }) {
  return (
    // <View>
    <ColoredHeader>
      <View className=" justify-center pt-12 pl-6">
         <Text className="text-white text-left font-inter text-lg font-semibold">Hello, Keisya</Text>
         <Text className="text-white text-left font-inter text-xs font-light">Upgrade your skill for better futures!</Text>
      </View>
      {/* <View className = "flex-row items-center p-3 rounded-lg  m-6 bg-[#394169] border border-[#8b91a3]" > 
          <TextInput className = "flex-1 ml-2 text-[#9CA3AF] text-xs font-light"  placeholder="What do you want to learn?" placeholderTextColor="white"/>
      </View> */}
      <TouchableOpacity
      onPress={() => navigation.navigate("Search")}
      className = "flex-row items-center p-3 rounded-lg  m-6 bg-[#394169] border border-[#8b91a3]">
      <TextInput
        className = "flex-1 ml-2 text-[#9CA3AF] text-xs font-light"
        placeholder="What do you want to learn?"
        placeholderTextColor="white"
        editable={false} // Membuat TextInput tidak dapat diedit
      />
    </TouchableOpacity>

    </ColoredHeader>
    // </View>
  );

}

