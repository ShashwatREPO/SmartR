import { View, Text, TextInput } from "react-native";

export default function FormInputUI({ text = "Text", placeholder }) {
  return (
    <View className=" relative  mx-auto   min-w-96  ">
      <View className="bg-[#FF735C] absolute flex flex-row px-1 items-center -top-3 left-3 border-white z-50">
        <Text className=" text-white   text-base  ">{text}</Text>
      </View>

      <TextInput
        placeholder={placeholder}
        className="border-[1.5px] text-white border-white px-4 py-3 rounded-lg relative z-10 placeholder:text-white"
      ></TextInput>
    </View>
  );
}
