import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { CustomImage, CustomText } from "@/components/atoms";
import { router } from "expo-router";
import { PlantCardProps } from "@/types";
import styles from "./PlantCard.styles";

const PlantCard: FC<PlantCardProps> = ({ uri, title, category, price, id }) => {
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
      <CustomImage uri={uri} />
      <View style={styles.textWrapper}>
        <CustomText text={title} />
        <CustomText secondary text={category} />
        <CustomText price text={price} />
      </View>
    </TouchableOpacity>
  );
};

export default PlantCard;
