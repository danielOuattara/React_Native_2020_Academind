import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import React from "react";
import { Title, ComputerGuess, PrimaryButton } from "../components";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function GameScreen() {
  const [currentGuess, setCurrentGuess] = useState(getRndInteger(0, 100));

  function nextGuessHandler(suggestion) {
    // 'lower' OR 'greater'
    if (suggestion === "lower") {
      console.log("It's lower");
      getRndInteger()
    } else if (suggestion === "greater") {
      console.log("It's greater");
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <ComputerGuess>{currentGuess}</ComputerGuess>
      <View>
        <Text> Higher or Lower ? + -</Text>
        <View style={styles.btnContainer}>
          <PrimaryButton onPressAction={() => nextGuessHandler("lower")}>-</PrimaryButton>
          <PrimaryButton onPressAction={() => nextGuessHandler("greater")}>+</PrimaryButton>
        </View>
      </View>
      <View>
        <Text>LOG ROUND</Text>
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
