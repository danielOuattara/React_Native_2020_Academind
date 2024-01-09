import { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text, FlatList } from "react-native";
import {
  Card,
  ComputerGuess,
  Instructions,
  PrimaryButton,
  Title,
} from "../components";
import { Ionicons } from "@expo/vector-icons";
import LogGuessesItems from "../components/game/LogGuessesItems";

//----
const generateRandomBetween = (min, max, exclude) => {
  /*
   * this function generate a random number between min included and max excluded
   * exclude: to avoid that the computer could guess the correct number on 1st launch
   **/

  let randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randNum;
};

let minBound = 1;
let maxBound = 100;

export default function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [logGuesses, setLogGuesses] = useState([initialGuess]);

  const nextGuessHandler = (suggestion) => {
    if (
      (suggestion === "less" && currentGuess < props.userNumber) ||
      (suggestion === "more" && currentGuess > props.userNumber)
    ) {
      return Alert.alert("ERROR", "Don't lie ! Game continue");
    }

    if (suggestion === "less") {
      maxBound = currentGuess - 1;
    } else if (suggestion === "more") {
      minBound = currentGuess + 1;
    }
    const newRandNum = generateRandomBetween(minBound, maxBound, currentGuess);
    setCurrentGuess(newRandNum);
    setLogGuesses((prevState) => [newRandNum, ...prevState]);
  };

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.setGameIsOver(true);
      minBound = 1;
      maxBound = 100;
    }
  }, [currentGuess]);

  useEffect(() => {
    props.setCounter((prevState) => prevState + 1);
  }, [currentGuess]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <ComputerGuess>{currentGuess}</ComputerGuess>
      <Text>{props.counter}</Text>
      <Card>
        <Instructions style={styles.instructionAdditional}>
          Is it Lower or Higher ?
        </Instructions>
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton pressAction={() => nextGuessHandler("less")}>
              Lower <Ionicons name="md-remove" />
            </PrimaryButton>
          </View>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton pressAction={() => nextGuessHandler("more")}>
              Higher <Ionicons name="md-add" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={logGuesses}
          renderItem={({ item, index }) => (
            <LogGuessesItems position={logGuesses.length - index} item={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },

  instructionAdditional: { marginVertical: 16 },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  singleButtonContainer: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
  },
});
