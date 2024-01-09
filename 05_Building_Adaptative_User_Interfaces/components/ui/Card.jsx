import { View, StyleSheet, Dimensions } from "react-native";
import { Colors } from "./../../constants";

export default function Card(props) {
  return <View style={styles.card}>{props.children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 340 ? 18 : 26,
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
