import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, SendHorizontal } from "lucide-react-native";
import ChatBubble from "@/components/ChatBubble";
import GeminieResponse from "@/components/GeminieResponse";
import axios from "axios";
import { useRouter } from "expo-router";

export default function ChatBot() {
  const [combinedChat, setCombinedChat] = useState(["hi", "hello"]);
  const [message, setMessage] = useState("");
  const chatBoxRef = useRef();

  const navigation = useRouter();

  const getGemniResponse = async (query) => {
    try {
      const response = await axios.post("http://localhost:3000/chat", {
        query,
      });
      return response.data.result;
    } catch (e) {
      console.error(e);
      return "Sorry, I couldn't process your request.";
    }
  };

  const handleInput = async () => {
    if (message.trim() !== "") {
      setCombinedChat((prevState) => [...prevState, message]);
      setMessage("");
      try {
        const result = await getGemniResponse(message);
        setCombinedChat((prevState) => [...prevState, result]);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    chatBoxRef.current?.scrollToEnd({ animated: true });
  }, [combinedChat]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingHorizontal: 32 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => {navigation.back()}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              >
                <ArrowLeft size={12} color="black" />
              </View>
            </Pressable>
            <Text
              style={{
                color: "#FF735C",
                fontWeight: "bold",
                fontSize: 24,
                marginLeft: 80,
              }}
            >
              Chatbot
            </Text>
          </View>
          <ScrollView
            ref={chatBoxRef}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-start",
              paddingVertical: 16,
            }}
            style={{ flex: 1, width: "100%" }}
          >
            {combinedChat.map((chat, index) =>
              index % 2 === 0 ? (
                <ChatBubble key={index} chat={chat} />
              ) : (
                <GeminieResponse key={index} markdown={chat} />
              )
            )}
          </ScrollView>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderWidth: 2,
              borderColor: "gray",
              borderRadius: 25,
              alignItems: "center",
            }}
          >
            <TextInput
              style={{ flex: 1 }}
              value={message}
              onChangeText={setMessage}
              placeholder="Write query"
            />
            <Pressable onPress={handleInput}>
              <SendHorizontal size={21} color="black" />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
