import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import theme from "../components/theme";

const GmailContainer = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "relative",
        paddingTop: Constants.statusBarHeight,
      }}
    >
      {children}
      <StatusBar backgroundColor={theme.colors["silver1"]} style="light" />
    </SafeAreaView>
  );
};

export default GmailContainer;
