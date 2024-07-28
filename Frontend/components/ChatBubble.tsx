import { View, Text } from "react-native";
import React from "react";

export default function ChatBubble({ chat }) {
  return (
    <View className="px-6 py-2 bg-white border-[1px]  rounded-full border-[#FF735C] ml-auto">
      <Text className="text-[#FF735C]">{chat}</Text>
    </View>
  );
}
