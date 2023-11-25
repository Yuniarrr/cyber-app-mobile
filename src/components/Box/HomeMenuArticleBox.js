import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const HomeMenuArticleBox = ({ imageSource, category, title,  onPress, backgroundColor }) => {
  return (
    <TouchableOpacity className="items-center rounded-lg bg-white shadow-xl h-60 w-60 p-3 gap-x-1 border-2 border-light-gray" onPress={onPress}>
      <View className="flex flex-col w-full">
        <Image source={imageSource} className="w-52 h-32 rounded-lg" />
        <Text className={`px-1 text-[9px] font-semibold text-center rounded-md w-1/3 my-2 ${backgroundColor}`}>{category}</Text>
        <Text className="text-sm font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeMenuArticleBox;
