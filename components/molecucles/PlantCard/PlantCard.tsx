import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CustomImage, CustomText } from "@/components/atoms";
import { styles } from "./styles";
import { router } from "expo-router";

type Props = {
  uri: string;
  title: string;
  category: string;
  price: string;
  id:string;
};

const PlantCard = ({ uri, title, category, price,id }: Props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={()=>router.push({ pathname: `/details/${id}` })}>
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
