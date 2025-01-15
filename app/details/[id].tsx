import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLocalSearchParams } from "expo-router";
import {
  CustomButton,
  CustomCounterButton,
  CustomText,
  Header,
} from "@/components/atoms";
import { CustomTabs } from "@/components/molecucles";

import { data } from "@/mock/data";
import { detailsTabs } from "@/constants/tabs";


const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const plant = data.find((plant) => plant.id === id);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <View style={styles.image}>
        <ImageBackground
          source={{ uri: plant?.uri }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.details}>
        <View>
          <CustomText text={plant?.title} />
        </View>
        <View style={styles.flexRow}>
          <View>
            <CustomText text={`${plant?.price}$`} price />
          </View>
          <View style={styles.flexRow}>
            <CustomCounterButton text="+" />
            <Text style={styles.counter}>1</Text>
            <CustomCounterButton text="-" />
          </View>
        </View>
        <View>Review sections</View>
        <View>
          <CustomTabs tabs={detailsTabs} />
        </View>
        <CustomButton
          title="Add to cart"
          onPress={() => console.log("add to cart")}
          active
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    marginBottom: 20,
    objectFit: "contain",
  },
  details: {
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -50,
    backgroundColor: "#fff",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    marginHorizontal: "2%",
    fontWeight: 500,
    fontSize: 20,
  },
});

export default DetailsScreen;
