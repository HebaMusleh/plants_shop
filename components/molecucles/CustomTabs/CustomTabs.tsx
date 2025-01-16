import React, { useState } from "react";

import { View } from "react-native";
import { CustomButton } from "@/components/atoms";

import { homeTabs as tabs } from "@/constants/tabs";
import styles from "./CustomTabs.styles";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const renderContent = () => {
    const activeTabContent = tabs.find(
      (tab: { key: any }) => tab.key === activeTab
    )?.content;
    return activeTabContent || null;
  };

  return (
    <View>
      <View style={styles.tabsWrapper}>
        {tabs.map((tab, i) => (
          <CustomButton
            key={i}
            title={tab.title}
            active={activeTab === tab.key}
            onPress={() => setActiveTab(tab.key)}
          />
        ))}
      </View>
      <View>{renderContent()}</View>
    </View>
  );
};

export default CustomTabs;
