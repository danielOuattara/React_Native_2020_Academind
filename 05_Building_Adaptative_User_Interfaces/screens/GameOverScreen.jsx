import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  // Dimensions,
  useWindowDimensions,
} from "react-native";
import { PrimaryButton, Title } from "../components";
import { Colors } from "../constants";

export default function GameOverScreen(props) {
  const { width, height, scale, fontScale } = useWindowDimensions();

  let imageSize = 300;

  // if (width < 340) {
  //   imageSize = 150;
  // }

  // if (height < 400) {
  //   imageSize = 80;
  // }

  if (height < width) {
    imageSize = 150;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("./../assets/images/success.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.summaryText}>
          Your phone made{" "}
          <Text style={styles.highlight}> {props.counter} </Text>
          rounds to guess the value of{" "}
          <Text style={styles.highlight}> {props.userNumber} </Text>
        </Text>

        <PrimaryButton pressAction={props.startNewGame}>
          Start New game ?
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    // borderRadius: deviceWidth < 340 ? 150 : 300,
    // width: deviceWidth < 340 ? 180 : 260,
    // height: deviceWidth < 340 ? 180 : 260,
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
