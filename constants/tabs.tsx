import { CustomText } from "@/components/atoms";
import { TabContent, TabDetailsContent } from "@/components/molecucles";
import { IData } from "@/types";
import { View } from "react-native";

export const homeTabs = [
  {
    key: "all",
    title: "All",
    content: <TabContent />,
  },
  {
    key: "new",
    title: "New",
    content: <TabContent type="new" />,
  },
  {
    key: "outdoor",
    title: "Outdoor",
    content: <TabContent type="outdoor" />,
  },
  {
    key: "indoor",
    title: "Indoor",
    content: <TabContent type="indoor" />,
  },
];

export const detailsTabs = (plant: IData) => [
  {
    key: "description",
    title: "Description",
    content: TabDetailsContent({ text: plant?.description }),
  },
  {
    key: "case-method",
    title: "case method",
    content: TabDetailsContent({ text: "case method ..." }),
  },
  {
    key: "reviews",
    title: "Reviews",
    content: TabDetailsContent({ text: "reviews ..." }),
  },
];
