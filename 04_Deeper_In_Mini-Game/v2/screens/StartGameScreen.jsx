import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063C",
    borderRadius: 8,
    /* Android */
    elevation: 4,
    /* End Android */

    /* IOS*/
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    /* End IOS */
  },
});
