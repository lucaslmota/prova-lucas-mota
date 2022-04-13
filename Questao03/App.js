import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react'

export default function App() {

  const [nome, setNome] = useState('teste')

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Digite uma palavra:</Text>
      <TextInput style={styles.input}
        placeholder='Uma palavra'
        onChangeText={(val) => setNome(val)}
      />
      <Text style={{ fontSize: 25 }}>Texto: {nome}</Text>
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
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 18,
    backgroundColor: `#f0f8ff`
  }
});
