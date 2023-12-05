import * as React from "react";
import { useState } from 'react';
import { View, Header, Item, Icon, Input, SearchText, FlatList, TouchableOpacity, TextInput, ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State untuk menyimpan hasil pencarian

  const handleSearch = () => {
    // Implementasi logika pencarian di sini
    console.log('Search:', searchText);

    // Contoh hasil pencarian (ganti dengan logika sesuai kebutuhan)
    const dummyResults = ['Title 1', 'Title 2', 'Title 3'];
    
    // Menyaring hasil yang cocok dengan teks pencarian
    const filteredResults = dummyResults.filter(result => result.toLowerCase().includes(searchText.toLowerCase()));

    setSearchResults(filteredResults);
  };

  const handleClearText = () => {
    setSearchText('');
    setSearchResults([]); // Membersihkan hasil pencarian saat teks dihapus
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <Background>
      <View className="flex flex-col items-center justify-between w-full mx-1 gap-y-2">
        <TouchableOpacity
          className="flex-row items-center p-2 rounded-lg m-3 bg-white border border-[#8b91a3]" 
          onPress={handleSearch}
        >
          <Ionicons name="search-outline" size={22} color="#394169" />
          <TextInput 
            className="flex-1 ml-3 mb-1 text-[#394169] text-sm font-normal"
            placeholder="What do you want to learn?"
            placeholderTextColor="#394169"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          {/* Icon "X" */}
          <TouchableOpacity onPress={handleClearText}>
            <Ionicons name="close-outline" size={30} color="#394169" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Text className=" ml-4 mt-2 text-left text-[#394169] text-lg font-bold">
          Suggestions
      </Text>
      <View className="flex flex-row p-2 ml-2" >
        <Ionicons name="search-outline" size={18} color="#111827" />
        <Text className=" ml-2 text-left text-[#111827] text-sm font-normal">
          Network Types
        </Text>
      </View>
      <View className="flex flex-row p-2 ml-2" >
        <Ionicons name="search-outline" size={18} color="#111827" />
        <Text className=" ml-2 text-left text-[#111827] text-sm font-normal">
          Network Media
        </Text>
      </View>
      <View className="flex flex-row p-2 ml-2" >
        <Ionicons name="search-outline" size={18} color="#111827" />
        <Text className=" ml-2 text-left text-[#111827] text-sm font-normal">
          Network Testing Utilities
        </Text>
      </View>
    
    </Background>
  );
}



