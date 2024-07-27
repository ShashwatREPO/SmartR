import { View, Text } from "react-native";
import React from "react";

export default function BorderWhiteButton({
  text = "some text",
  onPress,
  children,
}) {
  return (
    <View className="min-w-96  mx-auto  py-4 border-2 border-white  rounded-3xl">
      <Text
        className="text-center flex flex-row gap-2 items-center text-[16px] font-bold text-white"
        onPress={onPress}
      >
        {children}
        {text}
      </Text>
    </View>
  );
}
