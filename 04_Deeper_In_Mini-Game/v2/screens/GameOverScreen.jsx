import { Image, StyleSheet, Text, View } from "react-native";
import { Title } from "../components";
import { Colors } from "../constants";

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text>Your phone made X rounds to guess the value of Y</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    overflow: "hidden",
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.secondary500,
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
