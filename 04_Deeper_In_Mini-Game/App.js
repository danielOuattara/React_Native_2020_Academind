import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StartGameScreen, GameScreen, GameOverScreen } from "./screens";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  // Tips for switching between screens
  const [userNumber, setUserNumber] = useState();
  const [computerWon, setComputerWon] = useState(false);

  let screenToLoad = <StartGameScreen confirmUserNumber={setUserNumber} />;
  if (userNumber && !computerWon) {
    screenToLoad = <GameScreen userNumber={userNumber} setComputerWon={setComputerWon} />;
  }
  if (computerWon) {
    screenToLoad = <GameOverScreen />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#72063c", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={{ flex: 1 }}>{screenToLoad}</SafeAreaView>
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
