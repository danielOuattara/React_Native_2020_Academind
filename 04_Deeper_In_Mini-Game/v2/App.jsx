// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { StartGameScreen } from "./screens";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#72063C", "#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
