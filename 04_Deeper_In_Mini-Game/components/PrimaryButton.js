import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
// import React from "react";
import { Colors } from "../constants";

export default function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        style={
          Platform.OS === "ios"
            ? ({ pressed }) =>
                pressed
                  ? [styles.btnPressed, styles.buttonInnerContainer]
                  : styles.buttonInnerContainer
            : styles.buttonInnerContainer
        }
        onPress={props.onPressAction}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    marginVertical: 8,
    marginHorizontal: 10,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary800,
    paddingVertical: 6,
    paddingHorizontal: 26,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },

  /* IOS  */
  btnPressed: {
    opacity: 0.75,
  },
});
