import React from "react";
import { View, Text } from "react-native";
import { CustomTextProps } from "@/types";
import styles from "./CustomText.styles";

const CustomText: React.FC<CustomTextProps> = ({
  secondary,
  price,
  text,
  style,
  textProps,
  textContainerStyle,
}) => {
  return (
    <View style={textContainerStyle}>
      <Text
        {...textProps}
        style={[
          secondary ? styles.secondary : styles.primary,
          price && styles.price,
          style,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default CustomText;
