import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";

export default function chatBot() {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }} className="flex-1">
      <View className="flex flex-col h-screen px-8">
        <View className="flex-row items-center">
          <Pressable onPress={()=>{}}>
            <View className="size-10 flex flex-row justify-center items-center rounded-full border-[1px] border-gray-300">
              <ArrowLeft size={12} color={"black"} />
            </View>
          </Pressable>

          <Text className="text-[#FF735C] font-bold text-2xl ml-20">
            Chatbot
          </Text>
        </View>
        <ScrollView style={{}}></ScrollView>
        <TextInput
          className="w-full flex flex-row justify-between mb-5  px-6 py-2 border-2 border-black rounded-full border-opacity-5"
          placeholder="Write query"
        ></TextInput>
      </View>
    </SafeAreaView>
  );
}
