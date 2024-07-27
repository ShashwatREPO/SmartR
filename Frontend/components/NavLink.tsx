import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function NavLink({ label = "Default Text", isActive, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      className={`px-6 rounded-full py-2 border-2 ${
        isActive
          ? "border-[#FF6E57] text-[#FF6E57]"
          : "border-[#d9d9d9] text-[#d9d9d9]"
      } bg-white`}
    >
      <Text className={`${isActive ? "text-[#FF6E57]" : "text-[#d9d9d9]"}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
