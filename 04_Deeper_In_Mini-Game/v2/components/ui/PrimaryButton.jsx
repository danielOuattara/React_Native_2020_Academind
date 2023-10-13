import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "./../../constants";

export default function PrimaryButton(props) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.pressed] : styles.btnInnerContainer
        }
        onPress={props.pressAction}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    elevation: 4,
    margin: 4,
    overflow: "hidden",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  btnInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
