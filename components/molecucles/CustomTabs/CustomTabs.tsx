import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { CustomButton } from "@/components/atoms";
import { ITabs } from "@/types";
import styles from "./CustomTabs.styles";

const CustomTabs = ({ tabs }: { tabs: ITabs[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

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

  const renderContent = () => {
    const activeTabContent = tabs.find(
      (tab: { key: any }) => tab.key === activeTab
    )?.content;
    return activeTabContent || null;
  };
  return (
    <View>
      <View style={styles.tabsWrapper}>{tabs.map(tabsRenderHandler)}</View>
      <View>{renderContent()}</View>
    </View>
  );
};

export default CustomTabs;
