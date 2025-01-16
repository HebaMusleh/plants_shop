import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { CustomButton } from "@/components/atoms";
import { ITabs } from "@/types";
import styles from "./CustomTabs.styles";
// spacing it not really needed between imports you already seem to have a good grasp
// to import hierarchy

const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const renderContent = () => {
    const activeTabContent = tabs.find(
      (tab: { key: any }) => tab.key === activeTab
    )?.content;
    return activeTabContent || null;
  };
  const tabPressHandler = useCallback((tab: ITabs) => {
    setActiveTab(tab.key);
  }, []);
  const tabsRenderHandler = (tab: ITabs) => {
    const isActive = activeTab === tab.key;
    return (
      <CustomButton
        key={tab.key}
        title={tab.title}
        active={isActive}
        onPress={() => tabPressHandler(tab)}
      />
    );
  };
  return (
    <View>
      <View style={styles.tabsWrapper}>{tabs.map(tabsRenderHandler)}</View>
      <View>{renderContent()}</View>
    </View>
  );
};

export default CustomTabs;
