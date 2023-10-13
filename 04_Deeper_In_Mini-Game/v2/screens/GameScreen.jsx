import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title, ComputerGuess } from "../components";

export default function GameScreen(props) {
  const generateRandomBetween = (min, max, exclude) => {
    /*
     * this function generate a random number between min and max included
     * exclude: to avoid that the computer could guess the correct number on 1st launch
     **/
    let randNum = Math.floor(Math.random() * (max - min)) + min;
    if (randNum === exclude) {
      randNum = generateRandomBetween(min, max, exclude);
    } else {
      return randNum;
    }
  };

  console.log("props.userNumber = ", props.userNumber);

  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>GameScreen</Title>
      <ComputerGuess>{currentGuess}</ComputerGuess>
      <View>
        <Text>Log Rounds details</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
});
