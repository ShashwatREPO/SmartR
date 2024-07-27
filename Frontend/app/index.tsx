import AppLogo from "@/components/AppLogo";
import BorderWhiteButton from "@/components/BorderWhiteButton";
import WhiteButton from "@/components/WhiteButton";
import { Navigator, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();

  const handleClick = () => {
    router.push("accountCreation");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#FF735C" }} className="flex-1 ">
      <View className="h-full ">
        <AppLogo />
        <View className="flex-row mt-20 justify-center">
          <Image
            source={require("../assets/images/taxonboarding.png")}
            className="size-96 "
          />
        </View>
        <View className="flex flex-col justify-between h-80 ">
          <View>
            <Text className="text-[32px] px-10  text-white  font-semibold ">
              Welcome to SIRMS
            </Text>
            <Text className="text-[18px] px-10  text-white  font-medium ">
              An All Inclusive application to help you file, pay and manage your
              taxes.{"\n"} {"\n"}Let’s Make Your Taxes Less painful !
            </Text>
          </View>
          <View className="flex flex-col gap-6">
            <WhiteButton text="Create Account" onPress={handleClick} />
            <BorderWhiteButton text="Already have an account ? Login" />
          </View>
        </View>

        <Image
          source={require("../assets/images/Bottomcurve.png")}
          className="absolute right-0 bottom-0"
        ></Image>
      </View>
    </SafeAreaView>
  );
}
