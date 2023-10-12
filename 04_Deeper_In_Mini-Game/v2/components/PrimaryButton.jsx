import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton(props) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.pressed] : styles.btnInnerContainer
        }
        onPress={props.pressAction}
        android_ripple={{ color: "#af0058" }}
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
    backgroundColor: "#72063C",
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
