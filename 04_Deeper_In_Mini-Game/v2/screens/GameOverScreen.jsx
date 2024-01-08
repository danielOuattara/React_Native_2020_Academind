import { Image, StyleSheet, Text, View } from "react-native";
import { PrimaryButton, Title } from "../components";
import { Colors } from "../constants";

export default function GameOverScreen(props) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/images/success.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone made <Text style={styles.highlight}> {props.counter} </Text>
        rounds to guess the value of{" "}
        <Text style={styles.highlight}> {props.userNumber} </Text>
      </Text>

      <PrimaryButton pressAction={props.startNewGame}>
        Start New game ?
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 175,
    overflow: "hidden",
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: Colors.secondary500,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-regular",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
