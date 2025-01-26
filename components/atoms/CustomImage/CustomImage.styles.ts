import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/scalling";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    overflow: "hidden",
    width: horizontalScale(150),
    height: verticalScale(134),
    borderRadius: moderateScale(8),
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1.2,
    borderRadius: moderateScale(8),
  },
  loader: {
    position: "absolute",
    zIndex: 1,
  },
  cartWrapper: {
    width: verticalScale(80),
    height: horizontalScale(80),
  },
});
