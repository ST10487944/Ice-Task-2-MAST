import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Page is coming.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
  },
});