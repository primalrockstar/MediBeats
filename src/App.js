/**
 * MediBeats - AI-Powered Meditation Music App
 * Main entry point
 */

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { HomeScreen } from './screens';
import { darkTheme } from './assets/themes';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={darkTheme.colors.background} 
      />
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
});

export default App;
