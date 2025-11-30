import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

/**
 * HomeScreen - Main dashboard for MediBeats
 * Displays featured content, recent sessions, and quick actions
 */
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Evening</Text>
        <Text style={styles.title}>What would you like to create?</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Featured Sessions</Text>
        {/* Featured content will be rendered here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  greeting: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
  },
});

export default HomeScreen;
