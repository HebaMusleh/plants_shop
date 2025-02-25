import React from "react";
import { View, TouchableOpacity, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCartContext } from "@/context/CartContext";
import Loading from "../Loading/Loading";
import styles from "./Header.styles";
import { moderateScale } from "@/utils/scalling";

const Header = ({ home = false }: { home?: boolean }) => {
  const { cardItems, isLoading } = useCartContext();

  return (
    <View style={styles.wrapper}>
      {home ? (
        <Text style={styles.title}>Plants</Text>
      ) : (
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={moderateScale(24)} color="#121212" />
        </TouchableOpacity>
      )}

      <View style={styles.cartIcon}>
        <Pressable onPress={() => router.push("/cart")}>
          <MaterialCommunityIcons
            name="cart"
            size={moderateScale(30)}
            color="#0B845C"
          />
        </Pressable>
      </View>
      <View style={styles.countItems}>
        {isLoading ? <Loading /> : cardItems?.length}
      </View>
    </View>
  );
};

export default Header;
