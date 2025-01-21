import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { CustomButtonProps } from "@/types";
import styles from "./CustomButton.styles";

const CustomButton: React.FC<CustomButtonProps> = ({
  active,
  title,
  onPress,
  buttonProps,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, active && styles.active, buttonStyle]}
      {...buttonProps}
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
