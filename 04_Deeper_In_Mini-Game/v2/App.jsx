// import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StartGameScreen, GameScreen } from "./screens";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Colors } from "./constants";


export default function App() {
  const [userNumber, setUserNumber] = useState("");
  // const [gameIsOver, setGameIsOver] = useState(true);

  let screenToLoad = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber) {
    screenToLoad = <GameScreen />;
  }
  return (
    <LinearGradient colors={[Colors.primary500, Colors.secondary500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeArea}>{screenToLoad}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
  safeArea: {
    flex: 1,
  },
});
