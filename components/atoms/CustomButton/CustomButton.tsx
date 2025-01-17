import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./CustomButton.styles";
import { CustomButtonProps } from "@/types";

const CustomButton: React.FC<CustomButtonProps> = ({
  active,
  title,
  onPress,
  buttonProps,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, active && styles.active,buttonStyle]}
      {...buttonProps}
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
