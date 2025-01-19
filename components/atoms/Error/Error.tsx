import React from "react";
import { Text, StyleSheet } from "react-native";

const Error = ({ text }: { text: string }) => {
  return <Text style={styles.errorText}>{text}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "#f00",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Error;
