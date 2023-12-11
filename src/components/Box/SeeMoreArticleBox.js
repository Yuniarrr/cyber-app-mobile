import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SeeMoreArticleBox = ({ imageSource, category, title, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity className="items-center w-full p-3 mt-2 bg-white border-2 rounded-lg shadow-xl h-70 border-light-gray" onPress={onPress}>
      <View className="flex flex-col w-full">
        <Image source={imageSource} className="w-full rounded-lg h-44" />
        <Text className={`px-1 text-[9px] font-semibold text-center rounded-md w-1/3 my-2 ${backgroundColor}`}>{category}</Text>
        <Text className="text-sm font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SeeMoreArticleBox;
