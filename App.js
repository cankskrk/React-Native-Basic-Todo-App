import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Counter from "./src/Counter";
import CustomComponent from "./src/CustomInput";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
      <CustomComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45474B",
    alignItems: "center",
  },
});
