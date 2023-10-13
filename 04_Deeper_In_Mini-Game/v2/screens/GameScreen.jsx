import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Title } from "../components";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>GameScreen</Title>
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
    padding: 25,
  },
});
