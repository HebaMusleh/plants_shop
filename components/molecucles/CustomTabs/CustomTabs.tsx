import React, { useState } from "react";

import { View } from "react-native";
import { CustomButton } from "@/components/atoms";

import { ITabs } from "@/types";

const CustomTabs = ({ tabs }: { tabs: ITabs[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const renderContent = () => {
    const activeTabContent = tabs.find(
      (tab: { key: any }) => tab.key === activeTab
    )?.content;
    return activeTabContent || null;
  };
  return (
    <View>
      <View>
        {tabs.map((tab) => (
          <CustomButton
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
