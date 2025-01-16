import React from "react";
import { View, Text, TextStyle, TextProps, ViewStyle } from "react-native";
import { styles } from "./styles";

interface CustomTextProps {
  secondary?: boolean;
  price?: boolean;
  text?: string; // the question mark is enough to tell the ts compiler of the statement string | undefined
  style?: TextStyle;
  textProps?: TextProps;
  textContainerStyle?: ViewStyle;
}

const CustomText: React.FC<CustomTextProps> = ({
  secondary,
  price,
  text,
  style,
  textProps, // naming should be more specific
  textContainerStyle,
}) => {
  const textStyles = [
    secondary ? styles.secondary : styles.primary,
    price && styles.price,
    style,
  ];

  return (
    // <View> // this text is not necessary but it can be if use if we want to add a container style we can either remove it or
    <View style={textContainerStyle}>
      <Text {...textProps} style={textStyles}>
        {text}
      </Text>
    </View>
  );
};

export default CustomText;
