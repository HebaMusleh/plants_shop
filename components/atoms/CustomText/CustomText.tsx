import { View, Text } from "react-native";
import React from "react";
import styles from "./CustomText.styles";
import { CustomTextProps } from "@/types";

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
