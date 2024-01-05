import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Title, ComputerGuess, PrimaryButton } from "../components";

const generateRandomBetween = (min, max, exclude) => {
  /*
   * this function generate a random number between min and max included
   * exclude: to avoid that the computer could guess the correct number on 1st launch
   **/
  let randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randNum;
};

let minBound = 1;
let maxBound = 100;

export default function GameScreen(props) {
  const [counter, setCounter] = useState(1);

  const initialGuess = generateRandomBetween(
    minBound,
    maxBound,
    props.userNumber,
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (suggestion) => {
    if (
      (suggestion === "less" && currentGuess < props.userNumber) ||
      (suggestion === "more" && currentGuess > props.userNumber)
    ) {
      // checks user honesty
      return Alert.alert("ERROR", "Don't lie ! Game continue");
    }

    if (suggestion === "less") {
      maxBound = currentGuess;
    } else if (suggestion === "more") {
      minBound = currentGuess + 1;
    }
    const newRandNum = generateRandomBetween(minBound, maxBound, currentGuess);
    setCurrentGuess(newRandNum);
    setCounter(counter + 1);
  };
  // console.log("counter = ", counter);
  // console.log("minBound = ", minBound);
  // console.log("maxBound = ", maxBound);
  // console.log("numberToGuess = ", props.userNumber);
  // console.log("currentGuess = ", currentGuess);
  // console.log("------------");

  return (
    <View style={styles.screen}>
      <Title>GameScreen</Title>
      <ComputerGuess>{currentGuess}</ComputerGuess>
      <View>
        <Text>Higher OR Lower ?</Text>
        <View style={styles.controlBtnContainer}>
          <PrimaryButton pressAction={() => nextGuessHandler("less")}>
            -
          </PrimaryButton>
          <PrimaryButton pressAction={() => nextGuessHandler("more")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log Rounds details</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  controlBtnContainer: {
    flexDirection: "row",
  },
});
