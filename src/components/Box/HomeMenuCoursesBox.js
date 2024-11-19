import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const HomeMenuCoursesBox = ({ imageSource, category, title, price, rating, totalReviews, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity className="items-center rounded-lg bg-white shadow-xl h-64 w-60 p-3 gap-x-1 border-2 border-light-gray" onPress={onPress}>
      <View className="flex flex-col w-full">
        <Image source={imageSource} className="w-52 h-32 rounded-lg" />
        <Text className={`px-1 text-[9px] font-semibold text-center rounded-md w-1/3 my-2 ${backgroundColor}`}>{category}</Text>
        <Text className="text-sm font-semibold">{title}</Text>
        <View className="flex flex-row my-2">
          <View className="flex-1">
            <Text className="text-sm font-bold text-[#0564F1]">${price}</Text>
          </View>
          <View className="flex-1">
            <View className="flex flex-row justify-end">
              <Entypo name="star" size={17} color="#FDC83D" />
              <Text className="text-xs mx-1 text-center font-bold text-[#9CA3AF]">{rating}</Text>
              <Text className="text-xs mx-1 text-center font-normal text-[#9CA3AF]">({totalReviews})</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeMenuCoursesBox;
