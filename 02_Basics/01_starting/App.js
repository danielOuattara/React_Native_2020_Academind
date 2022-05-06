// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text
//       style={{
//         borderWidth: 1,
//         borderColor: "red",
//         marginVertical: 15,
//         padding: 8,
//         borderRadius: 3,
//       }}>Hello World!!!!</Text>

//       <Text style={styles.textStyle}>
//         Hello World Again !
//       </Text >
//       <StatusBar style="auto" />
//       <Button title="Send" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   textStyle: {
//     borderWidth: 1,
//     borderColor: "red",
//     marginVertical: 15,
//     padding: 8,
//     borderRadius: 3,
//   }
// });

//----------------------------------------------------------------------

// // 02- Exploring Layouts & Flexbox

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.textInput} placeholder="Your Goal Course" />
//         <Button title="add a goal" />
//       </View>
//       <View>
//         <Text>List of goals</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingVertical: 50,
//     paddingHorizontal: 25,
//     backgroundColor: "#eee",
//     // borderWidth: 2,
//     // flex: 1
//   },
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%"
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#bbb",
//     width: "80%",
//     marginRight: 8,
//     padding: 8,
//   },
// });

//----------------------------------------------------------------------
// 03- Flexbox Deep Dive

// import Flexbox from "./FlexboxDeepDive";

// export default function App() {
//   return <Flexbox />;
// }

//----------------------------------------------------------------------

// 04- Improving The Layout Using Flexbox

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.textInput} placeholder="Your Goal Course" />
//         <Button title="add a goal" />
//       </View>
//       <View style={styles.goalsContainer} >
//         <Text>List of goals</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingVertical: 50,
//     paddingHorizontal: 16,
//     backgroundColor: "#eee",
//     // borderWidth: 2,
//     flex: 1
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#CCC",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#bbb",
//     width: "80%",
//     marginRight: 8,
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//   },

//   goalsContainer: {
//     flex: 5
//   }
// });

//----------------------------------------------------------------------

// 05 - Handling Events

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [goals, setGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     if(!enteredGoalText) { return}
//     setGoals((previousState) => [...previousState, enteredGoalText]);
//     setEnteredGoalText("");
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your Goal Course"
//           onChangeText={goalInputHandler}
//           value={enteredGoalText}
//         />
//         <Button title="add a goal" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalsContainer}>
//         {goals.map((goal, index) => (
//           <Text style={styles.goalItem} key={index}>{goal}</Text>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingVertical: 50,
//     paddingHorizontal: 16,
//     backgroundColor: "#eee",
//     // borderWidth: 2,
//     flex: 1,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#CCC",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#bbb",
//     width: "80%",
//     marginRight: 8,
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//   },

//   goalsContainer: {
//     flex: 5,
//   },

//   goalItem: {
//     margin: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e08cc",
//     padding: 8,
//     color: "white",
//   },
// });

// // 06 - Styling Android VS IOS

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [goals, setGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     if (!enteredGoalText) {
//       return;
//     }
//     setGoals((previousState) => [...previousState, enteredGoalText]);
//     setEnteredGoalText("");
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your Goal Course"
//           onChangeText={goalInputHandler}
//           value={enteredGoalText}
//         />
//         <Button title="add a goal" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalsContainer}>
//         {goals.map((goal, index) => (
//           // Add a  View to easily style both Android & IOS
//           <View key={index} style={styles.goalItemView}>
//             <Text style={styles.goalItem}>{goal}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingVertical: 50,
//     paddingHorizontal: 16,
//     backgroundColor: "#eee",
//     // borderWidth: 2,
//     flex: 1,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#CCC",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#bbb",
//     width: "80%",
//     marginRight: 8,
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//   },

//   goalsContainer: {
//     flex: 5,
//   },

//   goalItemView: {
//     margin: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e08cc",
//     padding: 8,
//     color: "white",
//   },
//   goalItem: {
//     color: "white",
//   },
// });

//--------------------------------------------------------------
// 07 - Scrollable View

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import {
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   ScrollView,
// } from "react-native";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [goals, setGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     if (!enteredGoalText) {
//       return;
//     }
//     setGoals((previousState) => [...previousState, enteredGoalText]);
//     setEnteredGoalText("");
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your Goal Course"
//           onChangeText={goalInputHandler}
//           value={enteredGoalText}
//         />
//         <Button title="add a goal" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalsContainer}>
//         <ScrollView>
//           {goals.map((goal, index) => (
//             // Add a  View to easily style both Android & IOS
//             <View key={index} style={styles.goalItemView}>
//               <Text style={styles.goalItem}>{goal}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingVertical: 50,
//     paddingHorizontal: 16,
//     backgroundColor: "#eee",
//     // borderWidth: 2,
//     flex: 1,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#CCC",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#bbb",
//     width: "80%",
//     marginRight: 8,
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//   },

//   goalsContainer: {
//     flex: 5,
//   },

//   goalItemView: {
//     margin: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e08cc",
//     padding: 8,
//     color: "white",
//   },
//   goalItem: {
//     color: "white",
//   },
// });

//---------------------------------------------------

// 08- FlaList
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (!enteredGoalText) {
      return;
    }
    setGoals((previousState) => [
      ...previousState,
      { title: enteredGoalText, key: new Date().getTime().toString() },
    ]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal Course"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="add a goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.goalItemView}>
              <Text style={styles.goalItem}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: "#eee",
    // borderWidth: 2,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    width: "80%",
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  goalsContainer: {
    flex: 5,
  },

  goalItemView: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    padding: 8,
    color: "white",
  },
  goalItem: {
    color: "white",
  },
});

