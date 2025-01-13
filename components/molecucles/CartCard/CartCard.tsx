import React from "react";

import { TouchableOpacity, View } from "react-native";
import {
  CustomCounterButton,
  CustomImage,
  CustomText,
} from "@/components/atoms";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export default function CartCard({
  uri,
  title,
  category,
  price,
}: {
  uri: string;
  title: string;
  category: string;
  price: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.plantWrapper}>
        <CustomImage cart uri={uri} />
        <View style={{ marginLeft: 10 }}>
          <CustomText text={title} />
          <CustomText text={category} secondary />
          <View style={styles.plantWrapper}>
            <CustomCounterButton text="-" />
            <CustomText text="1" style={{ marginLeft: 10, marginRight: 10 }} />
            <CustomCounterButton text="+" />
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.icons}>
          <MaterialCommunityIcons name="delete" color={"#0B845C"} />
        </TouchableOpacity>
        <CustomText text={price} price />
      </View>
    </View>
  );
}
