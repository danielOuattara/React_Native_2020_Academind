import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.pressed]
            : styles.buttonInnerContainer
        }
        /* onPress={} */ android_ripple={{ color: "#af0058" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    elevation: 4,
    margin: 4,
    overflow: "hidden",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063C",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
