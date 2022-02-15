import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import FlexBox from './components/FlexBox';
export default function App() {
  return (
    // <View style={{ padding: 50}}>
    //   <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center' }}>
    //     <TextInput 
    //       placeholder="Enter course goal..." 
    //       style={{ width: '80%', borderColor: "black", borderWidth: 1, padding: 10 }}
    //     />
    //     <Button title="Add" />
    //     <StatusBar style="auto" />
    //   </View>
    //   <View></View>
    // </View>
    <View>
        <FlexBox />
    </View>
  );
}
