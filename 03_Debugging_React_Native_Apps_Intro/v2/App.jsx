import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoal(enteredGoalText) {
    return setGoals((previousState) => [
      ...previousState,
      { title: enteredGoalText, key: new Date().getTime().toString() },
    ]);
  }

  function deleteGoal(key) {
    return setGoals((prevState) =>
      prevState.filter((goal) => goal.key !== key),
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.showModal}>
        <Button
          title="Add New Goal"
          color={"#6f00ff"}
          onPress={() => setModalIsVisible(true)}
        />
      </View>
      <GoalInput
        addGoal={addGoal}
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
      <GoalsList goals={goals} deleteGoal={deleteGoal} />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 18,
  },

  showModal: {
    width: "50%",
    marginLeft: "25%",
    marginBottom: 10,
  },

  goalsContainer: {
    flex: 5,
  },
});
