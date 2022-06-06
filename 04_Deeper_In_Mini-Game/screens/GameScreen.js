import { StyleSheet, Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { Title, ComputerGuess, PrimaryButton } from "../components";

export default function GameScreen(props) {
  console.log("=================================");
  const [counter, setCounter] = useState(0);
  // const [min, setMin] = useState(0);
  // const [max, setMax] = useState(100);
  let min = 1;
  let max = 99;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const [currentGuess, setCurrentGuess] = useState(getRndInteger(min, max));

  useEffect(() => {
    setCounter((counter) => counter + 1);
  }, [currentGuess]);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      () => props.setComputerWon(true);
    }
  }, [currentGuess]);

  console.log(props.userNumber);
  // check if computer won: send back computerWon = true to App.js

  function nextGuessHandler(suggestion) {
    if (currentGuess < min || currentGuess > max) {
      console.log("Something went wrong !");
      return Alert.alert("ERROR", "Don't lie ! Game restart.", [
        {
          text: "Agree",
          style: "destructive",
          onPress: () => {
            setCounter(0);
            min = 0;
            max = 100;
            setCurrentGuess(() => getRndInteger(min, max));
          },
        },
      ]);
    }

    // 'lower' OR 'greater'
    else if (suggestion === "less") {
      // setMax(() => currentGuess);
      max = currentGuess;
      // setCurrentGuess(() => getRndInteger(min, max));
    } else if (suggestion === "more") {
      // setMin(() => currentGuess);
      min = currentGuess;
    }
    setCurrentGuess(() => getRndInteger(min, max));
  }

  console.log("Counter = ", counter);
  console.log("new min = ", min, ",", "new max = ", max);
  console.log("new guess: ", currentGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <ComputerGuess>{currentGuess}</ComputerGuess>
      <View>
        <Text> Higher or Lower ? + -</Text>
        <View style={styles.btnContainer}>
          <PrimaryButton onPressAction={() => nextGuessHandler("less")}>-</PrimaryButton>
          <PrimaryButton onPressAction={() => nextGuessHandler("more")}>+</PrimaryButton>
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
