import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  activeTaskContainer: {
    flex: 1,
    backgroundColor: "#F4CE14",
    width: Dimensions.get("window").width / 1.2,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  disabledTaskContainer: {
    flex: 1,
    width: Dimensions.get("window").width / 1.2,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#808080",
  },
  text: {
    fontFamily: "monospace",
    color: "#45474B",
  },

  disabledText: {
    fontFamily: "monospace",
    color: "#45474B",
    textDecorationLine: "line-through",
  },
});
