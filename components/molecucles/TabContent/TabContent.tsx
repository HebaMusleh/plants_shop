import React, { Fragment } from "react";
import { View } from "react-native";
import { IData } from "@/types";
import PlantCard from "../PlantCard/PlantCard";
import styles from "./TabContent.styles";

const TabContent = ({ data }: { data: IData[] }) => {
  return (
    <View style={styles.wrapper}>
      {data.map((item) => (
        <Fragment key={item.id}>
          <PlantCard {...item} />
        </Fragment>
      ))}
    </View>
  );
};

export default TabContent;
