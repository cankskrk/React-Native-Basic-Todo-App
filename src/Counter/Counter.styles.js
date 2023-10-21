import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 10,
    height: 50,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  counterHeader: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 24,
  },
  counterNumber: {
    fontFamily: "monospace",
    fontSize: 24,
  },
});
