import { StyleSheet, TextInput, View, Alert } from "react-native";
import { PrimaryButton } from "../components";
import { useState } from "react";

export default function StartGameScreen() {
  const [playerNumber, setPlayerNumber] = useState("");

  const resetPlayerNumber = () => setPlayerNumber("");

  const checkPlayerNumberInput = () => {
    let playerInput = parseInt(playerNumber);

    if (isNaN(playerInput) || playerInput < 0 || playerNumber > 99) {
      Alert.alert(
        "ERROR",
        "Cannot be empty ! \nOnly integer value between 1 and 99.",
        [
          {
            text: "Agree",
            style: "destructive",
            onPress: () => resetPlayerNumber(),
          },
        ],
      );
    } else {
      // props.confirmUserNumber(playerNumber);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={playerNumber}
        onChangeText={(playerInput) => setPlayerNumber(playerInput)}
      />
      <View style={styles.btnContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton pressAction={resetPlayerNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton pressAction={checkPlayerNumberInput}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    /* Android */
    elevation: 4,
    /* End Android */

    /* IOS*/
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    /* End IOS */

    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  btnContainer: {
    flexDirection: "row",
  },

  singleButtonContainer: {
    flex: 1,
  },
});
