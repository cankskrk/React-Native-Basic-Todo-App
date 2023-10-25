import { View, Text } from "react-native";

// Styles
import styles from "./List.styles";

const List = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tasks.task}</Text>
    </View>
  );
};

export default List;
