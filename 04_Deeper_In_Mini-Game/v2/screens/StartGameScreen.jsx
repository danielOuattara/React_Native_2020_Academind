import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components";

export default function StartGameScreen() {
  return (
    <View>
      <TextInput placeholder="Enter a number to guess" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({});
