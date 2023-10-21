import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    alignContent: "center",
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  input: {
    width: Dimensions.get("window").width / 1.5,
    padding: 10,
  },
});
