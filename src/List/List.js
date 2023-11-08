import { TouchableOpacity, Text } from "react-native";

// Styles
import styles from "./List.styles";

const List = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <Text style={styles.text}>{props.task}</Text>
    </TouchableOpacity>
  );
};

export default List;
