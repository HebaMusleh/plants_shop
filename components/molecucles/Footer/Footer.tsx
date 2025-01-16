import { View } from "react-native";
import React from "react";
import { CustomButton, CustomText } from "@/components/atoms";
import { styles } from "./styles";

// when ever we use props it almost always should be destructured

const Footer = () => {
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
          // one liner functions are considered ok to stay inline but if it ever becomes bigger we need to separate it
          // to a const with a name that reflects business logic
        />
      </View>
    </View>
  );
};

export default Footer;
