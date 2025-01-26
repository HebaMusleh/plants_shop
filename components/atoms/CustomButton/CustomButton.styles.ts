import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "@/utils/scalling";

export default StyleSheet.create({
  button: {
    borderRadius: moderateScale(8),
    padding: verticalScale(10),
  },
  active: {
    backgroundColor: "#0B845C",
  },
  text: {
    color: "#7D7B7B",
    fontSize: moderateScale(14),
    lineHeight: 21,
    fontWeight: 400,
    fontFamily: "Poppins",
    textAlign: "center",
  },
  textActive: {
    color: "#fff",
    fontWeight: 600,
  },
});
