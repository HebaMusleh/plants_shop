import { View, Text } from "react-native";
import React from "react";
import { CustomButton, CustomText } from "@/components/atoms";
import { styles } from "./styles";

type Props = {};

const Footer = (props: Props) => {
  return (
    <View style={styles.footer}>
      <View>
        <CustomText text="Total" secondary />
        <CustomText text="99$" price />
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
