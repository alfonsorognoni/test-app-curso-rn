import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import {flatListArray} from "./array"

export default function App(props) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text>HOLA</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="telefono"
        keyboardType="numeric"
        textContentType="password"
        secureTextEntry="true"
      />
      <Pressable style={{padding: 10, backgroundColor:"red" }} onPress={() => undefined}><Text>Cambiar</Text></Pressable>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '80%'
  },
});
