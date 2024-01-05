import { StyleSheet, Text } from "react-native";
import { Colors } from "./../../constants";

export default function Instructions(props) {
  return (
    <Text style={{ ...styles.instructions, ...props.style }}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  instructions: {
    color: Colors.secondary500,
    fontSize: 18,
  },
});
