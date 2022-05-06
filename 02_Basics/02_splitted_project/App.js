// 09 - Splitting in Small Components

import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showAddGoalModal(bool) {
    setModalIsVisible(bool);
  }

  function addGoalHandler(title) {
    setGoals((previousState) => [
      ...previousState,
      { title, key: new Date().getTime().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(key) {
    setGoals((previousState) =>
      previousState.filter((item) => item.key !== key)
    );
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#6000de"
        onPress={() => showAddGoalModal(true)}
      />
      <GoalInput
        showAddGoalModal={showAddGoalModal}
        addGoalHandler={addGoalHandler}
        modalIsVisible={modalIsVisible}
      />

      <GoalsList goals={goals} deleteGoalHandler={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 75,
    paddingHorizontal: 16,
  },
});
