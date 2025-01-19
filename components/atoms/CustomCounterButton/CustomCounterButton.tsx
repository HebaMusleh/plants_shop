import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

import styles from "./CustomCounterButton.styles";

const CustomCounterButton = ({ text,onPress }: { text: string,onPress: ((event: GestureResponderEvent) => void) | undefined}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomCounterButton;
