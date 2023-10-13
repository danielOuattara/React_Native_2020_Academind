import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants";

export default function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: 12,
  },
});
