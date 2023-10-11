import { StyleSheet, Text, View } from "react-native";

export default function PrimaryButton(props) {
  return (
    <View>
      <Text>
        {props.children}
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
