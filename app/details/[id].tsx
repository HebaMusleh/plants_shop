import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Container, Header } from "@/components/atoms";
import { data } from "@/mock/data";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const DetailsScreen = (props: Props) => {
  const { id } = useLocalSearchParams();
  const plant = data.find((plant) => plant.id === id);
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.image}>
        <ImageBackground
          source={{ uri: plant?.uri }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.details}>
        <Container>
          <View>
            <Text>{plant?.title}</Text>
          </View>
          <View></View>
        </Container>
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -50,
    backgroundColor: "#fff",
  },
});

export default DetailsScreen;
