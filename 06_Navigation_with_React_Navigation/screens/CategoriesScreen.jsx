import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "./../data/local-data";
import { CategoryGridTile } from "./../components";

export default function CategoriesScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item, index }) => (
          <CategoryGridTile title={item.title} color={item.color} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
