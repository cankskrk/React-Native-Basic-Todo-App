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
      task: "Take some photos",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Study Spanish",
      isCompleted: false,
    },
    {
      id: 3,
      task: "Drink water",
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

  const onPressList = (taskID) => {
    const taskIndex = data.findIndex((task) => task.id === taskID);
    const newData = [...data];
    newData[taskIndex] = {
      ...newData[taskIndex],
      isCompleted: !newData[taskIndex].isCompleted,
    };

    setData(newData);
  };

  // Number of TODO
  const numberTODO = data.filter((d) => !d.isCompleted).length;

  return (
    <SafeAreaView style={styles.container}>
      <Counter number={numberTODO} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <List
            task={item.task}
            onPress={() => onPressList(item.id)}
            done={item.isCompleted}
          />
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
