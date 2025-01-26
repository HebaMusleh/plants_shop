import { moderateScale, verticalScale } from "@/utils/scalling";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    padding: verticalScale(20),
  },
  textStyle: {
    color: "#7D7B7B",
    fontSize: moderateScale(10),
    lineHeight: moderateScale(20),
    fontWeight: 400,
    fontFamily: "Poppins",
  },
});
