import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import theme, { Box, Text } from "../components/theme";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

/* Components */
import GmailContainer from "./GmailContainer";
import EmailData from "./emailData";
import EmailItem from "./EmaiItem";
import { SendIcon } from "../SvgIcons";
import { useValue, withTransition } from "react-native-redash";
import Animated, { eq, interpolate } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const EmailTop = () => {
  return (
    <Box
      height={50}
      paddingVertical="m"
      paddingHorizontal="s"
      flexDirection="row"
      backgroundColor="white"
      alignItems="center"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0.2,
        },
        shadowOpacity: 0,
        shadowRadius: 5,
        borderRadius: 5,
        borderWidth: 0.2,
      }}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="white"
        flex={1}
      >
        <Box flexDirection="row" alignItems="center">
          <Ionicons name="menu" size={30} color="#070707" />
          <Text style={{ marginLeft: 10 }} variant="body">
            Search Email
          </Text>
        </Box>
        <Box>
          <Avatar
            containerStyle={{ backgroundColor: "#4DD0E1" }}
            rounded
            title="SA"
          />
        </Box>
      </Box>

      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: -1,
          flexDirection: "row",
          paddingHorizontal: theme.spacing.m,
        }}
      >
        <Box flexDirection="row" alignItems="center">
          <Ionicons
            name="arrow-back"
            size={20}
            style={{ marginRight: 20, color: "#0E4FA7" }}
          />
          <Text variant="title" fontSize={15} style={{ color: "#0E4FA7" }}>
            3
          </Text>
        </Box>
        <Box flexDirection="row">
          <Ionicons
            name="archive"
            size={20}
            style={{ marginRight: 20, color: "#0E4FA7" }}
          />
          <AntDesign
            name="delete"
            size={20}
            style={{ marginRight: 20, color: "#0E4FA7" }}
          />
          <AntDesign
            name="delete"
            size={20}
            style={{ marginRight: 20, color: "#0E4FA7" }}
          />
        </Box>
      </Animated.View>
    </Box>
  );
};

const Gmail = () => {
  const [emails, setEmails] = useState(EmailData || []);

  return (
    <GmailContainer>
      
    </GmailContainer>
  );
};

export default Gmail;
