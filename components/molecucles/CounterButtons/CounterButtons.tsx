import React from "react";
import { View } from "react-native";
import { useCartContext } from "@/context/CartContext";
import { CustomCounterButton, CustomText } from "@/components/atoms";
import styles from "./CounterButton.styles";

const CounterButtons = ({ id }: { id: number }) => {
  const { addToCart, removeFromCart, quantity } = useCartContext();
  return (
    <View style={styles.Wrapper}>
      <CustomCounterButton text="-" onPress={() => removeFromCart(id, 1)} />
      <CustomText text={quantity(id)} style={styles.text} />
      <CustomCounterButton text="+" onPress={() => addToCart(id, 1)} />
    </View>
  );
};

export default CounterButtons;
