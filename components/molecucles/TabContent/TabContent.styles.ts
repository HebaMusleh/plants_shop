import { verticalScale } from "@/utils/scalling";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    paddingTop: verticalScale(20),
    flexDirection: "row",
    justifyContent:"center",
    flexWrap: "wrap",
  },
});
