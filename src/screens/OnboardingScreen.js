import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * OnboardingScreen - Introduction screen for new users
 * Guides users through app features and initial setup
 */
const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MediBeats</Text>
      <Text style={styles.subtitle}>Your personalized meditation music companion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default OnboardingScreen;
