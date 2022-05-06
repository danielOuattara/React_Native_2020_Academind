import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
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
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal Course"
          onChangeText={setEnteredGoalText}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="add a goal"
              onPress={() => goalInputHandler(enteredGoalText)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => props.showAddGoalModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    width: "90%",
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: "35%",
    marginHorizontal: 12,
    marginVertical: 10,
  },
});
