import React from "react";
import { FlatList, View, Dimensions } from "react-native";
import { IData } from "@/types";
import PlantCard from "../PlantCard/PlantCard";
import { styles } from "./styles";

const screenWidth = Dimensions.get("window").width;

const calculateNumColumns = () => {
  const columnWidth = 180;
  return Math.floor(screenWidth / columnWidth);
};

const TabContent = ({ data }: { data: IData[] }) => {
  const numColumns = calculateNumColumns();

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        renderItem={({ item }) => <PlantCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default TabContent;
