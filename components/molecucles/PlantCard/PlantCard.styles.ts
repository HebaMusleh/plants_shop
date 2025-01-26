import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/scalling";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    width: horizontalScale(160),
    borderRadius: moderateScale(6),
    marginBottom: verticalScale(15),
    marginHorizontal: horizontalScale(5.9),
    shadowColor: "#a3a1a1",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(6),
    elevation: 8,
    padding: verticalScale(5),
  },
  textWrapper: {
    paddingTop: verticalScale(10),
    gap:moderateScale(5)
  },
});
