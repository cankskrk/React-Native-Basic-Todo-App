import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// Components
import Counter from "./src/Counter";
import CustomInput from "./src/CustomInput";
import List from "./src/List";

export default function App() {
  // Todo List Data
  const [data, setData] = useState([
    {
      id: 1,
      task: "Fotoğraf çek",
      isCompleted: false,
    },
    {
      id: 2,
      task: "İspanyolca öğren",
      isCompleted: false,
    },
    {
      id: 3,
      task: "Baskları araştır",
      isCompleted: true,
    },
  ]);

  const [text, setText] = useState("");
  const onChangeText = (t) => {
    setText(t);
  };
  const onPress = () => {
    const newData = {
      id: data.length + 1,
      task: text,
      isCompleted: false,
    };

    setData([...data, newData]);
    setText("");
  };

  const onPressList = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Counter />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <List task={item.task} onPress={onPressList} />
        )}
        keyExtractor={(item) => item.id}
      />
      <CustomInput
        value={text}
        onChangeText={(t) => onChangeText(t)}
        onPress={onPress}
      />
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
