import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollView, StyleSheet } from "react-native";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default Container;
