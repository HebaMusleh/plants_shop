import { StyleSheet } from "react-native";
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "@/utils/scalling";

export default StyleSheet.create({
  button: {
    borderColor: "#0B845C",
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    width: horizontalScale(30),
    height: horizontalScale(30),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#0B845C",
    fontSize: moderateScale(20),
    textAlign: "center",
  },
});
