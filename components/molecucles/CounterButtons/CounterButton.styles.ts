import { StyleSheet } from "react-native";
import { verticalScale } from '@/utils/scalling';

export default StyleSheet.create({
  Wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: verticalScale(10),
    marginRight: verticalScale(10),
  },
});
