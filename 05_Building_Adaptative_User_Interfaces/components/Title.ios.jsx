import { StyleSheet, Text, Platform } from "react-native";
import { Colors } from "../constants";

export default function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 0,
    borderColor: Colors.secondary500,
    padding: 12,
    borderRadius: 6,
    maxWidth: "80%",
  },
});
