import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItemView}>
      <Pressable
        android_ripple={{ color: "#320073" }}
        onPress={() => props.deleteGoalHandler(props.item.key)}
        style={({ pressed }) => pressed & styles.pressedItem}
      >
        <Text style={styles.goalItem}>{props.item.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemView: {
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#6000de",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    padding: 8,
    color: "white",
  },
});
