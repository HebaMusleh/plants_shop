import React, { FC } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCartContext } from "@/context/CartContext";
import { CustomImage, CustomText } from "@/components/atoms";
import CounterButtons from "../CounterButtons/CounterButtons";
import { CartCardProps } from "@/types";
import styles from "./CartCard.styles";

const CartCard: FC<CartCardProps> = ({
  id,
  image_url,
  name,
  category,
  price,
}) => {
  const { removeFromCart } = useCartContext();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: "/details/[id]",
          params: { id },
        })
      }
    >
      <View style={styles.plantWrapper}>
        <CustomImage cart uri={image_url} />
        <View style={{ marginLeft: 10 }}>
          <CustomText text={name} />
          <CustomText text={category} secondary />
          <CounterButtons id={id} />
        </View>
      </View>
      <View style={styles.secondSection}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => removeFromCart(id, 1)}
        >
          <MaterialCommunityIcons name="close" color={"#0B845C"} />
        </TouchableOpacity>
        <CustomText text={`${price}$`} price />
      </View>
    </Pressable>
  );
};

export default CartCard;
