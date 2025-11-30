import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * CreatorScreen - AI music generation interface
 * Allows users to customize and generate meditation music using Suno API
 */
const CreatorScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Your Sound</Text>
        <Text style={styles.subtitle}>Customize your meditation music</Text>
      </View>
      <View style={styles.options}>
        <Text style={styles.label}>Mood</Text>
        {/* Mood selector will be rendered here */}
        <Text style={styles.label}>Duration</Text>
        {/* Duration selector will be rendered here */}
        <Text style={styles.label}>Style</Text>
        {/* Style selector will be rendered here */}
      </View>
      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateButtonText}>Generate Music</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 24,
  },
  header: {
    paddingTop: 60,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
  },
  options: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
    marginTop: 24,
  },
  generateButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  generateButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default CreatorScreen;
