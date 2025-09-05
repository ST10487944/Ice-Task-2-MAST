import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to BookApp</Text>
      <Text style={styles.subheading}>Your minimal book application</Text>
      <Text style={styles.content}>
        This is a simple React Native application created for educational purposes.
        Explore the Books tab to see what's coming soon!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});