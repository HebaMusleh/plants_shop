import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {};

const CustomText = ({
  secondary,
  price,
  text,
  rest,
}: {
  secondary?: boolean;
  price?: boolean;
  text:string;
  rest?: any;
}) => {
  return (
    <View>
      <Text
        {...rest}
        style={[
          secondary ? styles.secondary : styles.primary,
          price && styles.price,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default CustomText;
