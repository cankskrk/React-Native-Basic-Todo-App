import { TouchableOpacity, Text } from "react-native";

// Styles
import styles from "./List.styles";

const List = (props) => {
  return (
    <TouchableOpacity
      style={
        props.done ? styles.disabledTaskContainer : styles.activeTaskContainer
      }
      onPress={props.onPress}
    >
      <Text style={props.done ? styles.disabledText : styles.text}>
        {props.task}
      </Text>
    </TouchableOpacity>
  );
};

export default List;
