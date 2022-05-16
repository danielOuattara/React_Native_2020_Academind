// 09 - Splitting in Small Components
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

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
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#6000de"
          onPress={() => setModalIsVisible(true)}
        />
        <GoalInput
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
          addGoalHandler={addGoalHandler}
        />

        <GoalsList goals={goals} deleteGoalHandler={deleteGoalHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 75,
    paddingHorizontal: 16,
    // backgroundColor: "#1e085a"
  },
});
