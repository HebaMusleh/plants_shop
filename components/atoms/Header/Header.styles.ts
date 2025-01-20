import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 24,
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
    width: 20,
    height: 20,
    borderRadius: "50%",
    textAlign: "center",
    justifyContent: "center",
    top: 0,
    right: 0,
  },
});
