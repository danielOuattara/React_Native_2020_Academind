import { StyleSheet, Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { Title, ComputerGuess, PrimaryButton } from "../components";

export default function GameScreen(props) {
  const [counter, setCounter] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(99);

  // --> generate random number between min and max included
  const generateRandomBetween = (min, max, exclude) => {
    let ranNum = Math.floor(Math.random() * (max - min)) + min;
    if (ranNum === exclude) {
      ranNum = generateRandomBetween(min, max, exclude);
    }
    return ranNum;
  };

  const initialGuess = generateRandomBetween(min, max, null);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(suggestion) {
    if (
      (suggestion === "less" && currentGuess < props.userNumber) ||
      (suggestion === "more" && currentGuess > props.userNumber)
    ) {
      // checks user honesty
      console.log("Something went wrong !");
      return Alert.alert("ERROR", "Don't lie ! Game continue");
    } else if (suggestion === "less") {
      setMax((previousMax) => (previousMax = currentGuess));
    } else if (suggestion === "more") {
      setMin((previousMin) => (previousMin = currentGuess));
    }
    setCounter((counter) => counter + 1);
  }

  useEffect(() => {
    // game over
    if (currentGuess === props.userNumber) {
      props.terminateGame();
    }
  }, [currentGuess, props.userNumber, props.terminateGame]);

  useEffect(() => {
    if (currentGuess !== props.userNumber) {
      const newRndNumber = generateRandomBetween(min, max, currentGuess);
      setCurrentGuess((currentGuess) => (currentGuess = newRndNumber));
    }
  }, [counter]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <ComputerGuess>{currentGuess}</ComputerGuess>
      <View>
        <Text> Higher or Lower ? + -</Text>
        <View style={styles.btnContainer}>
          <PrimaryButton onPressAction={() => nextGuessHandler("less")}>
            -
          </PrimaryButton>
          <PrimaryButton onPressAction={() => nextGuessHandler("more")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Round = {counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 35,
    // paddingTop: 18,
    paddingHorizontal: 12,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
