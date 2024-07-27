import { View, Text } from "react-native";
import React from "react";

export default function WhiteButton({ text = "some text", onPress }) {
  return (
    <View className="min-w-96 mx-auto px-20 py-4 bg-white  rounded-3xl">
      <Text
        className="text-center text-[16px] font-bold text-[#FF735C]"
        onPress={onPress}
      >
        {text}
      </Text>
    </View>
  );
}
