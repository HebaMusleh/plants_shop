import React, { Fragment } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import PlantCard from "../PlantCard/PlantCard";
import styles from "./TabContent.styles";
import { useQuery } from "@tanstack/react-query";
import { IData } from "@/types";
import { useFetchData } from "@/hooks/useFetchData";

const TabContent = ({type="all"}:{type?:string}) => {
  const {
    data: plants,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plants"],
    queryFn: () => useFetchData(type),
  });

  if (isLoading)
    return (
      <View>
        <ActivityIndicator color="#0B845C" />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  return (
    <View style={styles.wrapper}>
      {plants?.map((item: IData) => (
        <Fragment key={item.id}>
          <PlantCard {...item} />
        </Fragment>
      ))}
    </View>
  );
};

export default TabContent;
