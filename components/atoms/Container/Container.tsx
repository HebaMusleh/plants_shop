import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const Container = ({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) => {
  return (
    <SafeAreaView style={[styles.container, home && { paddingHorizontal: 20 }]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
});

export default Container;
