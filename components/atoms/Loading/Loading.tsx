import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="#0B845C" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
