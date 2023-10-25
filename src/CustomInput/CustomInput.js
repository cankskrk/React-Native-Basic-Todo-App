import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

// Styles
import styles from "./CustomInput.styles";

const CustomInput = () => {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Type..."
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomInput;
