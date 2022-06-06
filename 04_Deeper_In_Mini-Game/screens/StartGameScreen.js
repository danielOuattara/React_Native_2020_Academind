import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { useState } from "react";
import { PrimaryButton } from "../components";
import { Colors } from "../constants";

export default function StartGameScreen(props) {
  const [playerNumber, setPlayerNumber] = useState("");

  const resetInput = () => setPlayerNumber("");

  const confirmInputHandler = () => {
    let playerInput = Number(playerNumber);
    if (!playerInput) {
      Alert.alert("ERROR", "Cannot be empty, Type in integer only", [
        {
          text: "Agree",
          style: "destructive",
          onPress: () => resetInput(),
        },
      ]);
    } else if (!Number.isInteger(playerInput) || playerInput < 0) {
      Alert.alert("ERROR", "Type in integer only", [
        {
          text: "Agree",
          style: "destructive",
          onPress: () => resetInput(),
        },
      ]);
    } else {
      props.confirmUserNumber(playerNumber);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Enter a number :</Text>
      </View>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={playerNumber}
        onChangeText={(playerInput) => setPlayerNumber(playerInput)}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPressAction={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPressAction={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 26,
    paddingHorizontal: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    /* Android */
    elevation: 14,
    /* End Android */

    /* IOS*/
    shadowColor: "black",
    shadowOffset: { width: 12, height: 18 },
    shadowRadius: 15,
    shadowOpacity: 0.5,
    /* End IOS */
  },

  labelContainer: {
    position: "absolute", // Needed to be able to precisely overlap label with border
    top: 25, // Vertical position of label. Eyeball it to see where label intersects border.
    left: 45,
    backgroundColor: Colors.primary500,
    paddingHorizontal: 8,
    marginStart: 13,
    // borderBottomWidth: 0,
    elevation: 1, // Needed for android
    alignSelf: "flex-start", // Have View be same width as Text inside
    zIndex: 1, // Label must overlap border
    // shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
  },

  labelText: {
    color: "#fff",
    fontSize: 15,
  },

  numberInput: {
    height: 60,
    fontSize: 32,
    borderColor: Colors.secondary600,
    borderRadius: 7,
    borderWidth: 2,
    color: Colors.secondary500,
    marginVertical: 10,
    fontWeight: "bold",
    width: 250,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  singleButtonContainer: {
    flex: 1,
  },
});
