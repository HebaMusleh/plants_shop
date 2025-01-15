import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Container, CustomText, Header } from "@/components/atoms";
import { CartCard, Footer } from "@/components/molecucles";

type Props = {};

const Cart = (props: Props) => {
  return (
    <Container>
      <Header />
      <View style={styles.flexRow}>
        <View>
          <Text style={styles.title}>Shopping Cart</Text>
        </View>
        <View>
          <CustomText text="num items" secondary />
        </View>
      </View>
      <View>
        <CartCard title="njdng" uri="jnjlkdv" price="97898" category="ijvior"/>
      </View>
      <Footer />
    </Container>
  );
};
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingVertical:20
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});
export default Cart;
