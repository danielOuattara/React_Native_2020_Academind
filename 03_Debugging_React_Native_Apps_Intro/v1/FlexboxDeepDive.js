import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Flexbox() {
  return (
    <View style={styles.main}>
      <View style={styles.bloc_1}>
        <Text>1</Text>
      </View>
      <View style={styles.bloc_2}>
        <Text>2</Text>
      </View>
      <View style={styles.bloc_3}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50,
    flexDirection: "row",
    height: 300,
    // width: "80%",
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  bloc_1: {
    backgroundColor: "red",
    // width: 100,
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bloc_2: {
    backgroundColor: "blue",
    // width: 100,
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  bloc_3: {
    backgroundColor: "green",
    // width: 100,
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 3
  },
});
