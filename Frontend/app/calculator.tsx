// app/(tab)/CalculatorWebView.js
import React from "react";
import { WebView } from "react-native-webview";

export default function CalculatorWebView() {
  return (
    <WebView
      source={{ uri: "http://lavya1978.pythonanywhere.com/" }}
      style={{ flex: 1 }}
    />
  );
}
