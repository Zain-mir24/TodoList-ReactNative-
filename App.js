import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";

export default function App() {
  const [getinputtext, setinputtext] = useState("DummyText");
  return (
    <View style={styles.container}>
      <Text style={styles.title}> My todo app</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textinput}
          placeholder=" Enter Item"
          onChangeText={text=>setinputtext(text)}
        ></TextInput>
        <Button
        onPress={()=>{
          
        }}
         title="add" />
      </View>
      <View>
        <Text style={{ fontSize: 26 }}>{getinputtext}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    backgroundColor: "yellow",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
  inputcontainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  textinput: {
    borderColor: "orange",
    borderBottomWidth: 2,
    width: "70%",

    fontSize: 16,
    padding: 10,
  },
});
