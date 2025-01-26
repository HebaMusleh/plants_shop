import { StyleSheet } from "react-native";
import { verticalScale } from '@/utils/scalling';
import { moderateScale } from '@/utils/scalling';
import { horizontalScale } from '@/utils/scalling';

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0.005,
    lineHeight: 36,
  },
  cartIcon: {
    position: "relative",
  },
  countItems: {
    position: "absolute",
    backgroundColor: "#f00",
    color: "#fff",
    height: 20,
    width: 20,
    borderRadius: "50%",
    textAlign: "center",
    justifyContent: "center",
    top: 0,
    right: 0,
  },
});
