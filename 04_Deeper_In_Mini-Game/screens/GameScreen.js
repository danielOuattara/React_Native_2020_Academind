import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Title } from "../components";
export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text> Higher or Lower ? + -</Text>
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
    paddingTop: 34,
    paddingHorizontal: 12,
  },
});
