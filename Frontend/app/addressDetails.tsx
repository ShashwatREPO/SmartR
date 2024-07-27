import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormInputUI from "@/components/FormInputUI";
import WhiteButton from "@/components/WhiteButton";
import { router, useRouter } from "expo-router";
import { ChevronRight, Locate } from "lucide-react-native";

import BorderWhiteButton from "@/components/BorderWhiteButton";
import * as Location from "expo-location";

export default function addressDetails() {
  const [location, setLocation] = useState(null);
  const [Zone, setZone] = useState("");
  const [Ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
  }, []);

  const handleGetCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const { latitude, longitude } = location.coords;
      setAddress(`Lat: ${latitude}, Lon: ${longitude}`);
      console.log(address);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#FF735C" }} className="flex-1">
      <KeyboardAvoidingView>
        <View className="flex flex-col h-full gap-4 relative">
          <Text>
            <ChevronRight />
          </Text>

          <View className="flex flex-col items-center">
            <Text className="text-white font-bold text-3xl">
              Enter Address Details
            </Text>
            <Text className="text-white font-regular text-xl">
              Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View className="flex-1 justify-between">
            <View className="flex flex-col gap-6  mt-14">
              <View className="flex flex-row mx-10  items-center gap-4 ">
                <View className=" relative  basis-1/2 w-full  max-w-96  ">
                  <View className="bg-[#FF735C] absolute flex flex-row px-1 items-center -top-3 left-3 border-white z-50">
                    <Text className=" text-white text-base ">Zone No.</Text>
                  </View>

                  <TextInput
                    placeholder={"Address"}
                    className="border-[1.5px] text-white border-white  px-4 py-3 rounded-lg relative z-10 placeholder:text-white"
                  ></TextInput>
                </View>
                <View className=" relative    basis-1/2 w-full  max-w-96  ">
                  <View className="bg-[#FF735C] absolute flex flex-row px-1 items-center -top-3 left-3 border-white z-50">
                    <Text className=" text-white text-base ">Ward No.</Text>
                  </View>

                  <TextInput
                    placeholder={"Address"}
                    className="border-[1.5px] text-white border-white  px-4 py-3 rounded-lg relative z-10 placeholder:text-white"
                  ></TextInput>
                </View>
              </View>

              <View className=" min-w-96 mx-auto  ">
                <View className="bg-[#FF735C] absolute flex flex-row px-1 items-center -top-3 left-3 border-white z-50">
                  <Text className=" text-white text-base">Full Address</Text>
                </View>

                <TextInput
                  multiline
                  placeholder={"Address"}
                  className="border-[1.5px]  align-top text-white border-white h-40 px-4 py-3 rounded-lg relative z-10 placeholder:text-white"
                ></TextInput>
              </View>
            </View>
            <View className="flex flex-col gap-4 mb-20 ">
              <Text className="text-white text-center">or manually enter</Text>
              <BorderWhiteButton
                text="Get Current Location"
                onPress={handleGetCurrentLocation}
              >
                <Locate size={18} color={"white"} />
              </BorderWhiteButton>
              <WhiteButton
                text="Create Account"
                onPress={() => {
                  router.push("(tabs)");
                }}
              />
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/images/ovals.png")}
          className="absolute top-[400px] right-0"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
