import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SeeMoreCoursesBox = ({ imageSource, category, title, price, rating, totalReviews, onPress, backgroundColor }) => {
  return (
    // <View className="flex-1 m-2">
    <TouchableOpacity className="items-center w-full p-3 mt-2 bg-white border-2 rounded-lg shadow-xl h-70 border-light-gray" onPress={onPress}>
      <View className="flex flex-col w-full">
        <Image source={imageSource} className="w-full rounded-lg h-44" />
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
    // </View>
  );
};

export default SeeMoreCoursesBox;
