import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  plantWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  icons: {
    borderColor: "#0B845C",
    borderWidth: 2,
    borderRadius: "50%",
    width: 25,
    height: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  secondSection: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
  },
});
