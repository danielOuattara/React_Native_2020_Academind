import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GameOverScreen() {
  return (
    <View style={styles.gameover}>
      <Text>GameOverScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gameover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
