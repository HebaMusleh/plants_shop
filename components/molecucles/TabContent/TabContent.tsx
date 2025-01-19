import React, { Fragment } from "react";
import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "@/services/fetchData.services";
import PlantCard from "../PlantCard/PlantCard";
import { Error, Loading } from "@/components/atoms";
import { IData } from "@/types";
import styles from "./TabContent.styles";

const TabContent = ({ type = "all" }: { type?: string }) => {
  const {
    data: plants,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plants", type],
    queryFn: () => getAll(type),
  });

  if (isLoading) return <Loading />;

  if (error) return <Error text={error.message} />;

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
