import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
// import React from "react";

export default function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#7601c9" }}
        style={
          Platform.OS === "ios"
            ? ({ pressed }) =>
                pressed
                  ? [styles.btnPressed, styles.buttonInnerContainer]
                  : styles.buttonInnerContainer
            : styles.buttonInnerContainer
        }
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
    backgroundColor: "#510028",
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
