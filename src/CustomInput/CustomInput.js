import { View, TextInput } from "react-native";
import { useState } from "react";

// Styles
import styles from "./CustomInput.styles";

const CustomInput = () => {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add..."
      />
    </View>
  );
};

export default CustomInput;
