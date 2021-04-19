import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput></TextInput>
      <Button />
      <StatusBar style="auto" />
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
