import { View, Text } from "react-native";
import React from "react";
import { CustomButton, CustomText } from "@/components/atoms";
import styles from "./Footer.styles";

const Footer = ({totalPrice}:{totalPrice:number}) => {
  return (
    <View style={styles.footer}>
      <View>
        <CustomText text="Total" secondary />
        <CustomText text={`${totalPrice}$`} price />
      </View>
      <View style={styles.checkout}>
        <CustomButton
          active
          title="Proceed to checkout"
          onPress={() => console.log("checkout button")}
        />
      </View>
    </View>
  );
};

export default Footer;
