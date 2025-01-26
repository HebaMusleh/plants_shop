import { StyleSheet } from "react-native";
import { verticalScale } from "@/utils/scalling";

export default StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: verticalScale(20),
  },
  checkout: {
    flexBasis: "80%",
  },
});
