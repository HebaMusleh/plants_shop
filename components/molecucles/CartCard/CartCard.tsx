import React from "react";

import { TouchableOpacity, View } from "react-native";
import {
  CustomCounterButton,
  CustomImage,
  CustomText,
} from "@/components/atoms";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

interface CartCardProps {
  uri: string;
  title: string;
  category: string;
  price: string;
}

// the convention is to use arrow functions but this also is not incorrect
export default function CartCard({
  uri,
  title,
  category,
  price,
}: CartCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.plantWrapper}>
        <CustomImage cart uri={uri} />
        <View style={{ marginLeft: 10 }}>
          {/** always remember to remove inline styling  */}
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
}
