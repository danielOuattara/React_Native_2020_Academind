import { StyleSheet, TextInput, View, Alert } from "react-native";
import { PrimaryButton, Title, Card, Instructions } from "../components";
import { useState } from "react";
import { Colors } from "../constants";

export default function StartGameScreen(props) {
  const [playerNumber, setPlayerNumber] = useState("");

  const checkPlayerNumberInput = () => {
    if (
      isNaN(parseInt(playerNumber)) ||
      parseInt(playerNumber) < 0 ||
      parseInt(playerNumber) > 99
    ) {
      return Alert.alert(
        "ERROR",
        "Cannot be empty ! \nOnly integer value between 1 and 99.",
        [
          {
            text: "Agree",
            style: "destructive",
            onPress: () => setPlayerNumber(""),
          },
        ],
      );
    } else {
      return props.setUserNumber(parseInt(playerNumber));
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <Instructions>Enter a number</Instructions>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={playerNumber}
          onChangeText={(input) => setPlayerNumber(input)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton pressAction={() => setPlayerNumber("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton pressAction={checkPlayerNumberInput}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 30,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.secondary500,
    color: Colors.secondary500,
    marginVertical: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  singleButtonContainer: {
    flex: 1,
  },
});
