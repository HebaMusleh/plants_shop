import React from "react";
import { Text, View } from "react-native";
import styles from "./TabDetailsContent.styles";

const TabDetailsContent = ({ text }: { text: string }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default TabDetailsContent;
