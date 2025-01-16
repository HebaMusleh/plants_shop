import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

import { styles } from "./styles"; // try to use the .styles.ts approach here and in the rest of the app

// defining an interface will allow you to create reusable types
interface CustomButtonProps {
  active?: boolean;
  title: string;
  onPress: () => void;
  rest?: TouchableOpacityProps;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  active,
  title,
  onPress,
  rest,
}) => {
  return (
    <TouchableOpacity // you can also use Pressable component
      style={[styles.button, active && styles.active]}
      {...rest}
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
