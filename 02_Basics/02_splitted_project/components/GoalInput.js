import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function GoalInput(props) {
  const [goalTitle, setGoalTitle] = useState("");

  function goalInputHandler(enteredText) {
    if (goalTitle) {
      setGoalTitle(enteredText);
      props.addGoalHandler(goalTitle);
      setGoalTitle("");
    }
  }
  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("./../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter a New Goal Course"
          onChangeText={setGoalTitle}
          value={goalTitle}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Go Back"
              onPress={() => props.setModalIsVisible(false)}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="add a goal"
              onPress={() => goalInputHandler(goalTitle)}
              color="#5e0acc"
            />
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
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "90%",
    marginRight: 8,
    padding: 12,
    color: "#120438",
    borderRadius: 8,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: "35%",
    marginHorizontal: 12,
    marginVertical: 26,
  },
});
