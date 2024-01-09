import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default function LogGuessesItems(props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}># {props.position}</Text>
      <Text style={styles.itemText}> Opponent's Guess: {props.item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary500,

    elevation: 6,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  itemText: {
    fontFamily: "open-sans-regular",
  },
});
