import { StyleSheet, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    if (enteredGoalText) {
      setEnteredGoalText(enteredText);
      props.addGoalHandler(enteredGoalText);
      setEnteredGoalText("");
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal Course"
        onChangeText={setEnteredGoalText}
        value={enteredGoalText}
      />
      <Button
        title="add a goal"
        onPress={() => goalInputHandler(enteredGoalText)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    width: "80%",
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});
