// 09 - Splitting in Small Components

import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(title) {
    setGoals((previousState) => [
      ...previousState,
      { title, key: new Date().getTime().toString() },
    ]);
  }

  function deleteGoalHandler(key) {
    setGoals((previousState) =>
      previousState.filter((item) => item.key !== key)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <GoalsList goals={goals} deleteGoalHandler={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: "#eee",
    // borderWidth: 2,
    flex: 1,
  },
});
