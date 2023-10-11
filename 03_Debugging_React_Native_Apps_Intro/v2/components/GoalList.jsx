import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import GoalItem from "./GoalItem";

export default function GoalsList(props) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={props.goals}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <GoalItem item={item} deleteGoal={props.deleteGoal} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    marginVertical: 35,
  },
});
