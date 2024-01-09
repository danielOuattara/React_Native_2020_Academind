import { View, StyleSheet } from "react-native";
import { Colors } from "./../../constants";

export default function Card(props) {
  return <View style={styles.card}>{props.children}</View>;
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    /* Android */
    elevation: 4,
    /* End Android */
    /* IOS*/
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    /* End IOS */
    alignItems: "center",
  },
});
