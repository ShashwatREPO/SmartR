import React from "react";
import { WebView } from "react-native-webview";

export default function CalculatorWebView() {
  return (
    <WebView
      source={{ uri: "https://chatbot-l583.onrender.com/" }}
      style={{ flex: 1 }}
    />
  );
}
