import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./Header.styles";
import { router } from "expo-router";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#121212" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
