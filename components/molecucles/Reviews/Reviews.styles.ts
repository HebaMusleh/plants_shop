import { StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "@/utils/scalling";

export default StyleSheet.create({
  container: {
    padding: verticalScale(16),
    backgroundColor: "#f9f9f9",
  },
  reviewCard: {
    marginBottom: horizontalScale(16),
    padding: verticalScale(12),
    backgroundColor: "#ffffff",
    borderRadius: moderateScale(8),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: horizontalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  username: {
    fontSize: moderateScale(12),
    fontWeight: "bold",
    color: "#333",
    marginBottom: horizontalScale(4),
  },
  comment: {
    fontSize: moderateScale(10),
    color: "#666",
    lineHeight: 20,
  },
});
