import { StyleSheet } from "react-native";
import { moderateScale } from '@/utils/scalling';

export default StyleSheet.create({
  primary: {
    color: "#121212",
    fontSize: moderateScale(16),
    lineHeight: 22,
    fontWeight: 700,
    fontFamily: "Poppins",
  },
  price: {
    color: "#0B845C",
  },
  secondary: {
    color: "#7D7B7B",
    fontSize: moderateScale(14),
    lineHeight: 20,
    fontWeight: 400,
    fontFamily: "Poppins",
  },
});
