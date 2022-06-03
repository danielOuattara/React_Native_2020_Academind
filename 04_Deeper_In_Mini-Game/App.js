import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { StartGameScreen, GameScreen } from "./screens";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  // Tips for switching between screens
  const [userNumber, setUserNumber] = useState();
  let screenToLoad = <StartGameScreen confirmUserNumber={setUserNumber} />;
  if (userNumber) {
    screenToLoad = <GameScreen />;
  }
  return (
    <LinearGradient style={styles.rootScreen} colors={["#72063c", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screenToLoad}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
