import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PinLockView from "react-native-pin-lock-view";


export default function App() {

  React.useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
      <PinLockView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
