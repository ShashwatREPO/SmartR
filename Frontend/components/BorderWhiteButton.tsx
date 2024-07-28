import { View, Text } from "react-native";
import React from "react";

export default function BorderWhiteButton({
  text = "some text",
  onPress,
  children,
}) {
  return (
    <View className="min-w-96 flex flex-row items-center justify-center  mx-auto  py-4 border-2 border-white  rounded-3xl">
      {children}
      <Text className="text-center font-bold text-white" onPress={onPress}>
        {text}
      </Text>
    </View>
  );
}
