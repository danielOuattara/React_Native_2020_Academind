import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "./../data/local-data";
import { CategoryGridTile } from "./../components";

export default function CategoriesScreen() {
  return (
    <View>
      <Text>CategoriesScreen</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item, index }) => (
          <CategoryGridTile title={item.title} color={item.color} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
