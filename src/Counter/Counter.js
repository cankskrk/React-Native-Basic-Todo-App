import { View, Text } from "react-native";

// Styles
import styles from "./Counter.styles";

const Counter = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counterHeader}>Yapılacakalar</Text>
      <Text style={styles.counterNumber}>{props.number}</Text>
    </View>
  );
};

export default Counter;
