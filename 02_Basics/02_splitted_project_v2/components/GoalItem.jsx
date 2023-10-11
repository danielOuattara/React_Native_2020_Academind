import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItemView}>
      <Text style={styles.goalItem}>{props.item.title}</Text>
      <Pressable
        onPress={() => props.deleteGoal(props.item.key)}
        // Android
        android_ripple={{ color: "#a692c0" }}
        // IOS
        style={({ pressed }) => pressed & styles.pressedItem}
      >
        <MaterialIcons style={styles.icon} name="delete-forever" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#6f00ff",
    color: "white",
    borderWidth: 1,
    borderColor: "#bd8eff",
  },
  goalItem: {
    color: "white",
    padding: 8,
    width: "88%",
    fontSize: 16,
  },
  icon: {
    fontSize: 24,
    color: "#fff",
    padding: 12,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
