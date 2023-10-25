import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Counter from "./src/Counter";
import CustomComponent from "./src/CustomInput";
import List from "./src/List";

// Todo List Data
import todo_data from "./todo_list.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
      <FlatList
        data={todo_data}
        renderItem={({ item }) => <List tasks={item} />}
        keyExtractor={(item) => item.id}
      />
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
