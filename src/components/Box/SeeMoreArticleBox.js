import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SeeMoreArticleBox = ({ imageSource, category, title,  onPress, backgroundColor }) => {
  return (
    <View className="flex-1 m-2">
    <TouchableOpacity className="items-center rounded-lg bg-white shadow-xl  h-70 w-[350px] p-3  border-2 border-light-gray" onPress={onPress}>
      <View className="flex flex-col w-full">
        <Image source={imageSource} className="w-80 h-44 rounded-lg" />
        <Text className={`px-1 text-[9px] font-semibold text-center rounded-md w-1/3 my-2 ${backgroundColor}`}>{category}</Text>
        <Text className="text-sm font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default SeeMoreArticleBox;
