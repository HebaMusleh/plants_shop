import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "@/utils/scalling";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(20),
  },
  plantWrapper: {
    flexDirection: "row",
    // alignItems: "flex-end",
  },
  icons: {
    borderColor: "#0B845C",
    borderWidth: moderateScale(2),
    borderRadius: "50%",
    width: verticalScale(25),
    height: verticalScale(25),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  secondSection: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  text: {
    marginLeft: verticalScale(10),
    marginRight: verticalScale(10),
  },
  details: {
    marginLeft: verticalScale(10),
    justifyContent:"space-around"
  },
});
