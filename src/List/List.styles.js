import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4CE14",
    width: Dimensions.get("window").width / 1.2,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: "#45474B",
  },
});
