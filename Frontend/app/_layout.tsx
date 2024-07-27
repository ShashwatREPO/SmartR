import { Stack } from "expo-router";

import "../global.css";

export default function RootLayout() {
  return (
    <Stack initialRouteName="addressDetails">

  
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="accountCreation" options={{ headerShown: false }} />
      <Stack.Screen name="addressDetails" options={{ headerShown: false }} />
    </Stack>
  );
}
