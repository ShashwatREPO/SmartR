import { View, Text, Image } from "react-native";
import React from "react";
import FormInputUI from "../components/FormInputUI";
import WhiteButton from "../components/WhiteButton";
import { ChevronLeft, ChevronLeftIcon } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Link, useRoute } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";

export default function AccountCreation() {
  const router = useRouter();

  const HandleBack = () => {
    router.back();
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#FF735C" }} className="flex-1">
      <KeyboardAvoidingView>
        <View className="flex flex-col h-full gap-4">
          <Text>
            <ChevronLeftIcon size={32} color={"white"} onPress={HandleBack} />
          </Text>

          <View className="flex flex-col items-center">
            <Text className="text-white font-bold text-3xl">
              Enter Personal Details
            </Text>
            <Text className="text-white font-regular text-xl">
              Lorem ipsum dolor sit amet
            </Text>
          </View>

          <View className="flex flex-col gap-6  mt-10">
            <FormInputUI text="Full Name" placeholder="John Doe" />
            <FormInputUI text="Phone no." placeholder="+91" />
            <FormInputUI
              text="Addhar no."
              placeholder="XXXX - XXXX - XXXX - XXXX"
            />
          </View>
          <WhiteButton
            text="Next"
            onPress={() => {
              router.push("addressDetails");
            }}
          />

          <Text
            className="text-white text-center text-lg"
            onPress={() => router.back()}
          >
            Already have an account ? Login
          </Text>
        </View>
      </KeyboardAvoidingView>
      <Image
        source={require("../assets/images/Circle.png")}
        className="absolute bottom-0"
      />
    </SafeAreaView>
  );
}
