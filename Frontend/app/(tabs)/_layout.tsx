// app/layout.tsx
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NavLink from "@/components/NavLink";
import Dashboard from "./index"; // Import your screen components
import AllScreen from "./all";
// Import other screens if needed

export default function Layout() {
  const router = useRouter();
  const navigation = useNavigation();
  const [activeLink, setActiveLink] = useState("dashboard");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleNavLinkPress = (label) => {
    setActiveLink(label);
    // Since we are managing navigation state internally, no need to use router.push here
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1 }} className="flex flex-col gap-4">
        <View className="flex flex-row justify-between mx-8 items-center">
          <View className="flex flex-col">
            <Text className="text-2xl">Hello,</Text>
            <Text className="text-2xl text-[#FF735C] font-bold">
              Rakesh Sighn
            </Text>
          </View>
          <Pressable
            onPress={() => {
              router.push("chatBotHyper");
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
            <NavLink
              label="dashboard"
              isActive={activeLink === "dashboard"}
              onPress={() => handleNavLinkPress("dashboard")}
            />
            <NavLink
              label="all"
              isActive={activeLink === "all"}
              onPress={() => handleNavLinkPress("all")}
            />
            <NavLink
              label="property tax"
              isActive={activeLink === "property tax"}
              onPress={() => handleNavLinkPress("property tax")}
            />
            <NavLink
              label="rewards"
              isActive={activeLink === "rewards"}
              onPress={() => handleNavLinkPress("rewards")}
            />
          </View>
        </ScrollView>
        <ScrollView style={{ flex: 1, marginBottom: 20 }}>
          {activeLink === "dashboard" && <Dashboard />}
          {activeLink === "all" && <AllScreen />}
          {/* Render other components based on the active link */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
