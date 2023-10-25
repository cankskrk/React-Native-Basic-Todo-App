import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 45,
    width: Dimensions.get("window").width / 1.2,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#495E57",
    borderRadius: 8,
  },
  input_container: {},
  input: {
    width: Dimensions.get("window").width / 1.3,
    padding: 10,
    alignContent: "center",
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#F5F7F8",
    color: "#F5F7F8",
    fontFamily: "monospace",
  },
  button: {
    flex: 1,
    margin: 15,
    alignItems: "center",
    padding: 10,
    width: Dimensions.get("window").width / 1.5,
    backgroundColor: "#F4CE14",
    borderRadius: 8,
  },
  button_text: {
    color: "#45474B",
    fontFamily: "monospace",
  },
});
