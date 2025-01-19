import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomText } from "@/components/atoms";

const TabDetailsContent = ({ text }: { text: string }) => {
  return (
    <View style={styles.wrapper}>
      <CustomText secondary text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});

export default TabDetailsContent;
