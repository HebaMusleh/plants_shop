import React, { Fragment } from "react";
import { View, Dimensions, FlatList } from "react-native";
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
      {/* two ways to display data here , which is the best ?  */}
      {data.map((item) => (
        <Fragment key={item.id}>
          <PlantCard {...item} />
        </Fragment>
      ))}

      {/* <FlatList
        data={data}
        renderItem={({ item }) => <PlantCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 20 }}
      /> */}
    </View>
  );
};

export default TabContent;
