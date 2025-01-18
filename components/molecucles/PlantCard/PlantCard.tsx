import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { CustomImage, CustomText } from "@/components/atoms";
import { router } from "expo-router";
import { PlantCardProps } from "@/types";
import styles from "./PlantCard.styles";

const PlantCard: FC<PlantCardProps> = ({ image_url, name, category, price, id }) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        router.push({
          pathname: "/details/[id]",
          params: { id },
        })
      }
    >
      <CustomImage uri={image_url} />
      <View style={styles.textWrapper}>
        <CustomText text={name} />
        <CustomText secondary text={category} />
        <CustomText price text={price} />
      </View>
    </TouchableOpacity>
  );
};

export default PlantCard;
