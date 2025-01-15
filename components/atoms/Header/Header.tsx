import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { router } from "expo-router";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#121212" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
