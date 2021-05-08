import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> My todo app</Text>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.textinput}></TextInput>
        <Button title="add" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:50
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputcontainer: {
    flexDirection: "row",
    width:'70%',
    justifyContent: "space-between",
  },
  textinput: {
    borderColor: "orange",
    borderWidth: 2,
    width: "70%",
  },
});
