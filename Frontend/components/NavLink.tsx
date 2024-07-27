import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function NavLink({ label = "Default Text" }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsActive(!isActive)}
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
