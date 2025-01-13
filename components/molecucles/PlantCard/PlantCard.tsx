import { View, Text } from "react-native";
import React from "react";
import { CustomImage, CustomText } from "@/components/atoms";
import { styles } from "./styles";

type Props = {
  uri: string;
  title: string;
  category: string;
  price: string;
};

const PlantCard = ({ uri, title, category, price }: Props) => {
  return (
    <View style={styles.wrapper}>
      <CustomImage uri={uri} />
      <View style={styles.textWrapper}>
        <CustomText text={title} />
        <CustomText secondary text={category} />
        <CustomText price text={price} />
      </View>
    </View>
  );
};

export default PlantCard;
