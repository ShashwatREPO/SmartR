import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { Navigator, Slot, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NavLink from "@/components/NavLink";

export default function Layout() {
  const navigation = useRouter();
  return (
    <Navigator>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ flex: 1 }} className="flex flex-col gap-4">
          <View className="flex flex-row justify-between mx-8 items-center">
            <View className="flex flex-col">
              <Text className="text-2xl">Hello,</Text>
              <Text className="text-2xl text-[#FF735C] font-bold">
                John Doe
              </Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.push("chatBot");
              }}
            >
              <Image
                source={require("../../assets/images/QuickAccessChatbotIcon.png")}
                resizeMode="contain"
                className="size-12"
              />
            </Pressable>
          </View>
          <ScrollView horizontal={true} style={{ flexGrow: 0 }}>
            <View className="flex flex-row gap-2 px-6">
              <NavLink label="Dashboard" />
              <NavLink label="All" />
              <NavLink label="Property tax" />
              <NavLink label="Rewards" />
            </View>
          </ScrollView>
          <ScrollView style={{ flex: 1, marginBottom: 20 }}>
            <Slot />
          </ScrollView>
        </View>
      </SafeAreaView>
    </Navigator>
  );
}
