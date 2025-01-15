import { Container, CustomText } from "@/components/atoms";
import { TabContent } from "@/components/molecucles";
import { data } from "@/mock/data";

export const homeTabs = [
  {
    key: "all",
    title: "All",
    content: <TabContent data={data} />,
  },
  {
    key: "new",
    title: "New",
    content: <TabContent data={data} />,
  },
  {
    key: "outdoor",
    title: "Outdoor",
    content: <TabContent data={data} />,
  },
  {
    key: "indoor",
    title: "Indoor",
    content: <TabContent data={data} />,
  },
];

export const detailsTabs = [
  {
    key: "description",
    title: "Description",
    content: <Container><CustomText secondary text="description" /></Container>,
  },
  {
    key: "case-method",
    title: "case method",
    content: <CustomText secondary text="case method" />,
  },
  {
    key: "reviews",
    title: "Reviews",
    content: <CustomText secondary text="Reviews" />,
  },
];
