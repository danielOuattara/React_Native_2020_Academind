import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem /*  { backgroundColor: color } */]}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={[
          styles.pressable,
          ({ pressed }) =>
            pressed && Platform.OS === "ios" ? [styles.iosButtonPressed] : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOffset: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  pressable: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Platform.OS === "ios" ? 8 : 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  /* IOS  */
  iosButtonPressed: {
    opacity: 0.75,
  },
});
