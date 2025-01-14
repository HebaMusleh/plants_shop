import { TabContent } from "@/components/molecucles";
import { data } from "@/mock/data";

export const homeTabs = [
  {
    key: "all",
    title: "All",
    content: <TabContent data={data}/>
  },
  {
    key: "new",
    title: "New",
    content: <TabContent data={data}/>
  },
  {
    key: "outdoor",
    title: "Outdoor",
    content: <TabContent data={data}/>
  },
  {
    key: "indoor",
    title: "Indoor",
    content: <TabContent data={data}/>
  },
];
