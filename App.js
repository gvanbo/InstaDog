import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import NewUserInput from './NewUserInput';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <NewUserInput />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
});
