import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  CustomCounterButton,
  CustomImage,
  CustomText,
} from "@/components/atoms";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartCardProps } from "@/types";
import styles from "./CartCard.styles";

const CartCard: FC<CartCardProps> = ({ uri, title, category, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.plantWrapper}>
        <CustomImage cart uri={uri} />
        <View style={{ marginLeft: 10 }}>
          <CustomText text={title} />
          <CustomText text={category} secondary />
          <View style={styles.plantWrapper}>
            <CustomCounterButton text="-" />
            <CustomText text="1" style={styles.text} />
            <CustomCounterButton text="+" />
          </View>
        </View>
      </View>
      <View style={styles.secondSection}>
        <TouchableOpacity style={styles.icons}>
          <MaterialCommunityIcons name="close" color={"#0B845C"} />
        </TouchableOpacity>
        <CustomText text={`${price}$`} price />
      </View>
    </View>
  );
};

export default CartCard;
