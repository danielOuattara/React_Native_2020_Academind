import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "./../../constants";

export default function ComputerGuess(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberValue}>{props.children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

console.log(deviceWidth);

// const windowDimensions = Dimensions.get("window");
// const screenDimensions = Dimensions.get("screen");

// console.log(windowDimensions);
// console.log(screenDimensions);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary500,
    // padding: 20,
    padding: deviceWidth < 340 ? 12 : 20,
    borderRadius: 8,
    // margin: 24,
    margin: deviceWidth < 340 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberValue: {
    color: Colors.secondary500,
    // fontSize: 36,
    fontSize: deviceWidth < 340 ? 26 : 36,
    fontFamily: "open-sans-bold",
  },
});
