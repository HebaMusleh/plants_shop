import { View, Text, TextStyle } from "react-native";
import React from "react";
import { styles } from "./styles";

const CustomText = ({
  secondary,
  price,
  text,
  style,
  rest,
}: {
  secondary?: boolean;
  price?: boolean;
  text: string | undefined;
  style?: TextStyle;
  rest?: any;
}) => {
  return (
    <View>
      <Text
        {...rest}
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
