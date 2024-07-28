import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Scroll } from "lucide-react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { useNavigation, useRouter } from "expo-router";

export default function Dashboard() {
  const navigaton = useNavigation();
  const navigation = useRouter();

  useEffect(() => {
    navigaton.setOptions({ headerShown: false });
  }, [navigaton]);

  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(255, 110, 87, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",

    color: (opacity = 1) => `rgba(255, 110, 87, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <View className="flex flex-col gap-4">
      <Image
        source={require("../../assets/images/taxFilingPoster.png")}
        className="w-[390px]  mx-auto"
        resizeMode="contain"
      />

      <Text className="font-bold mx-8">Dashboard</Text>
      <LineChart
        data={data}
        width={420}
        height={320}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />

      <View className="flex flex-row px-6 justify-between items-center">
        <View className="flex flex-col max-w-[5ch]">
          <Text className="text-xl font-bold">734 out of 800 credit score</Text>
          <Text className="text-base font-medium ">
            <Text className="text-[#FF735C] ">Know more </Text>about benefits of
            {"\n"}
            CIBIL score
          </Text>
        </View>

        <Image
          source={require("../../assets/images/Score.png")}
          style={{ width: 70 }}
          resizeMode="contain"
        />
      </View>

      <Text className="font-bold mx-6">Tools</Text>
      <View className="flex flex-row justify-between mx-6">
        <Pressable
          onPress={() => {
            navigation.push("calculator");
          }}
        >
          <View
            className="bg-[#FF6E57] flex flex-col items-center justify-center rounded-md  "
            style={{ width: 75, height: 75 }}
          >
            <Image
              source={require("../../assets/images/Calcpng.png")}
              resizeMode="cover"
              onError={() => console.log("Image failed to load")}
            />
            <Text className="text-white">Calculator</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.push("chatBotHyper")}}>
          <View
            className="bg-[#FF6E57] flex flex-col items-center justify-center rounded-md  "
            style={{ width: 75 }}
          >
            <Image
              source={require("../../assets/images/QuickAccessChatbotIcon.png")}
              onError={() => console.log("Image failed to load")}
            />
            <Text className="text-white">Chat Bot</Text>
          </View>
        </Pressable>
        <View
          className="bg-[#FF6E57] flex flex-col items-center justify-center rounded-md "
          style={{ width: 75 }}
        >
          <Image
            source={require("../../assets/images/Calender.png")}
            resizeMode="cover"
            onError={() => console.log("Image failed to load")}
          />
          <Text className="text-white">Reminder</Text>
        </View>
        <View
          className="bg-[#FF6E57] flex flex-col items-center justify-center rounded-md  "
          style={{ width: 75 }}
        >
          <Image
            source={require("../../assets/images/setting.png")}
            resizeMode="cover"
            onError={() => console.log("Image failed to load")}
          />
          <Text className="text-white">Settings</Text>
        </View>
      </View>
    </View>
  );
}
