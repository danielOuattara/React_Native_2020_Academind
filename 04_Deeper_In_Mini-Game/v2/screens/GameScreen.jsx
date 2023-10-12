import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>GameScreen</Text>
      <View>
        <Text> Higher OR Lower</Text>
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
    padding: 12,
    borderWidth: 4,
    borderColor: "green",
  },
});
