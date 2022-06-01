import { StyleSheet, Text, View, TextInput } from "react-native";
// import * as React from 'react';
import { PrimaryButton } from "../components";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Enter a number :</Text>
      </View>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 26,
    paddingHorizontal: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    /* Android */
    elevation: 14,
    /* End Android */

    /* IOS*/
    shadowColor: "black",
    shadowOffset: { width: 12, height: 18 },
    shadowRadius: 15,
    shadowOpacity: 0.5,
    /* End IOS */
  },

  labelContainer: {
    position: "absolute", // Needed to be able to precisely overlap label with border
    top: 25, // Vertical position of label. Eyeball it to see where label intersects border.
    left: 45,
    backgroundColor: "#72063c",
    paddingHorizontal: 8,
    marginStart: 13,
    // borderBottomWidth: 0,
    elevation: 1, // Needed for android
    alignSelf: "flex-start", // Have View be same width as Text inside
    zIndex: 1, // Label must overlap border
    // shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
  },

  labelText: {
    color: "#fff",
    fontSize: 15,
  },

  numberInput: {
    height: 60,
    fontSize: 32,
    borderColor: "#dda02fa7",
    borderRadius: 7,
    borderWidth: 2,
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
    width: 250,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  singleButtonContainer: {
    flex: 1,
  },
});
