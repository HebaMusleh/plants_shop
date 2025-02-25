import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useCartContext } from "@/context/CartContext";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "@/utils/scalling";
import { getDetails } from "@/services/fetchData.services";
import {
  Container,
  CustomButton,
  CustomText,
  Error,
  Header,
  Loading,
} from "@/components/atoms";
import { CounterButtons, CustomTabs } from "@/components/molecucles";
import { detailsTabs } from "@/constants/tabs";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const {
    data: plant,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plant", id],
    queryFn: () => getDetails(id),
  });

  const { addToCart } = useCartContext();

  if (isLoading) return <Loading />;

  if (error) return <Error text={error.message} />;

  return (
    <ScrollView>
      <Container home>
        <Header />
      </Container>
      <View style={styles.image}>
        <ImageBackground
          source={{ uri: plant?.image_url }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.details}>
        <View>
          <CustomText text={plant?.name} />
        </View>
        <View style={styles.flexRow}>
          <View>
            <CustomText text={`${plant?.price}$`} price />
          </View>
          <CounterButtons id={plant?.id} />
        </View>
        <View style={[styles.flexRow, { marginVertical: 10 }]}>
          <Image source={require("../../assets/images/Reviews.png")} />
          <Image source={require("../../assets/images/Avatars.png")} />
        </View>
        <View>
          <CustomTabs tabs={detailsTabs(plant)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Pressable
            onPress={() => console.log("add to fav")}
            style={styles.iconsStyle}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              size={moderateScale(24)}
              color="#7D7B7B"
            />
          </Pressable>
          <CustomButton
            title="Add to cart"
            onPress={() => addToCart(plant?.id, 1)}
            active
            buttonStyle={{ flexBasis: "88%" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: verticalScale(500),
    marginBottom: horizontalScale(20),
    objectFit: "contain",
  },
  details: {
    padding: verticalScale(20),
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    marginTop: horizontalScale(-100),
    backgroundColor: "#fff",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    marginLeft: verticalScale(10),
    marginRight: verticalScale(10),
    fontWeight: 500,
    fontSize: moderateScale(20),
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsStyle: {
    borderWidth: 2,
    borderColor: "#7D7B7B",
    borderRadius: moderateScale(8),
    padding: verticalScale(5),
  },
});

export default DetailsScreen;
