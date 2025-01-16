import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const CustomCounterButton = ({ text }: { text: string }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomCounterButton;
