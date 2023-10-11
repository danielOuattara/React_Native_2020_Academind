import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function handleAddGoal() {
    if (!enteredGoalText) return;
    props.addGoal(enteredGoalText);
    setEnteredGoalText("");
    return props.setModalIsVisible(false);
  }

  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("./../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal Course"
          onChangeText={setEnteredGoalText}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="cancel"
              onPress={() => props.setModalIsVisible(false)}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="add a goal"
              onPress={handleAddGoal}
              color={"#6f00ff"}
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
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "90%",
    padding: 8,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    marginVertical: 26,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
