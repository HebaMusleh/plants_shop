import { Container, CustomText } from "@/components/atoms";
import { TabContent } from "@/components/molecucles";

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

export const detailsTabs = [
  {
    key: "description",
    title: "Description",
    content: (
      <Container>
        <CustomText secondary text="description" />
      </Container>
    ),
  },
  {
    key: "case-method",
    title: "case method",
    content: (
      <Container>
        <CustomText secondary text="case method" />
      </Container>
    ),
  },
  {
    key: "reviews",
    title: "Reviews",
    content: (
      <Container>
        <CustomText secondary text="Reviews" />
      </Container>
    ),
  },
];
