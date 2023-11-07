import { View, TextInput, TouchableOpacity, Text } from "react-native";

// Styles
import styles from "./CustomInput.styles";

const CustomInput = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder="Type..."
        />
      </View>
      <TouchableOpacity
        style={
          props.value?.length > 0 ? styles.saveButtonActive : styles.saveButton
        }
        onPress={props.onPress}
      >
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomInput;
