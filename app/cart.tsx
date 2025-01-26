import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useCartContext } from "@/context/CartContext";
import { moderateScale,verticalScale } from "@/utils/scalling";
import {
  Container,
  CustomText,
  Error,
  Header,
  Loading,
} from "@/components/atoms";
import { CartCard, Footer } from "@/components/molecucles";

const Cart = () => {
  const { cardItems, totalPrice, isLoading, error } = useCartContext();
  return (
    <Container home>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.flexRow}>
            <View>
              <Text style={styles.title}>Shopping Cart</Text>
            </View>
            <View>
              <CustomText text={`${cardItems?.length} items`} secondary />
            </View>
          </View>
          <View>
            {error && <Error text={error.message} />}
            {cardItems?.length > 0 ? (
              cardItems?.map((item) => {
                const singleItem = item?.plant;
                const quantity = item?.quantity;
                return (
                  <CartCard
                    {...singleItem}
                    quantity={quantity}
                    key={singleItem.id}
                  />
                );
              })
            ) : (
              <CustomText text="No products items in cart " />
            )}
          </View>
          <Footer totalPrice={totalPrice} />
        </>
      )}
    </Container>
  );
};
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 700,
  },
});
export default Cart;
