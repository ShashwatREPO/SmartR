import { Stack } from "expo-router";

import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="accountCreation" options={{ headerShown: false }} />
      <Stack.Screen name="addressDetails" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="chatBot" options={{ headerShown: false }} />
      <Stack.Screen name="calculator" options={{ headerShown: false }} />
      <Stack.Screen name="chatBotHyper" options={{ headerShown: false }} />
    </Stack>
  );
}
