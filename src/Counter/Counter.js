import { View, Text } from "react-native";
import { useState } from "react";

// Styles
import styles from "./Counter.styles";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterHeader}>Yapılacakalar</Text>
      <Text style={styles.counterNumber}>{number}</Text>
    </View>
  );
};

export default Counter;
