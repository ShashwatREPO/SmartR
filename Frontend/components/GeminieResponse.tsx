import React from "react";
import { View } from "react-native";
import Markdown from "react-native-markdown-display";

export default function GeminieResponse({ markdown }) {
  return <Markdown>{markdown}</Markdown>;
}
