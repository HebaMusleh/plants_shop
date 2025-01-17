import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "@/components/atoms";
import { CustomTabs } from "@/components/molecucles";
import { homeTabs } from "@/constants/tabs";

const HomeScreen = () => {
  return (
    <Container>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Plants</Text>
        </View>
        <Pressable onPress={() => router.push("/cart")}>
          <MaterialCommunityIcons name="cart" size={24} color="#0B845C" />
        </Pressable>
      </View>
      <CustomTabs tabs={homeTabs} />
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0.005,
    lineHeight: 36,
    paddingBottom: 20,
  },
});
export default HomeScreen;
