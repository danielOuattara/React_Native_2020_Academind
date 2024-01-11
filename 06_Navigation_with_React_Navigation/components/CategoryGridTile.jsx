import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable onPress={""}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
