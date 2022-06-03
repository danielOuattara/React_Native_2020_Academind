import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants";

export default function ComputerGuess(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberValue}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberValue: {
    color: Colors.secondary500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
