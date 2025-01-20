import React from "react";
import { Container, Header } from "@/components/atoms";
import { CustomTabs } from "@/components/molecucles";
import { homeTabs } from "@/constants/tabs";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Container home>
        <Header home />
        <CustomTabs tabs={homeTabs} />
      </Container>
    </ScrollView>
  );
};

export default HomeScreen;
