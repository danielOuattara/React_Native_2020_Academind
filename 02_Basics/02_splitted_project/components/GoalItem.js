import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props) {
  console.log(props)
  return (
    <Pressable android_ripple={{color: "#ddd"}} onPress={()=>props.deleteGoalHandler(props.item.key)}>
      <View style={styles.goalItemView}>
        <Text style={styles.goalItem}>{props.item.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItemView: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    padding: 8,
    color: "white",
  },
  goalItem: {
    color: "white",
  },
});
