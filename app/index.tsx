import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Container, Header } from "@/components/atoms";
import { CustomTabs } from "@/components/molecucles";
import { homeTabs } from "@/constants/tabs";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.BG}>
      <Container home>
        <Header home />
        <CustomTabs tabs={homeTabs} />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  BG: {
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
