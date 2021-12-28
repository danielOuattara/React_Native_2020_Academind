import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const initialText = 'Open up App.js to start working on your app!';
  const [text, setText] = useState(initialText);

  const handleTextChange = () => {
    text === initialText ? setText("Text changed !") : setText(initialText)
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <Button title="Change text" onPress={handleTextChange}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
