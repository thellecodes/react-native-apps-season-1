import React from "react";
import { StyleSheet } from "react-native";
import { Box, Text } from "../components/theme";
import { Archive } from "../SvgIcons";

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#E1E2E3",
    alignItems: "center",
    overflow: "hidden",
  },
});

const CTA = ({ HEIGHT }) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="flex-end"
      style={{ ...styles.background }}
    >
      <Box
        flex={1}
        height={HEIGHT}
        backgroundColor="green"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal="m"
      >
        <Box>
          <Archive />
        </Box>
        <Box>
          <Archive />
        </Box>
      </Box>
    </Box>
  );
};

export default CTA;
