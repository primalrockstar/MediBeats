import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * PlayerScreen - Audio player interface
 * Controls playback of generated meditation music
 */
const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.artwork}>
        {/* Album artwork or visualization will be rendered here */}
        <View style={styles.artworkPlaceholder} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Calm Ocean Waves</Text>
        <Text style={styles.subtitle}>Relaxation • 10 min</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>2:34</Text>
          <Text style={styles.time}>10:00</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlIcon}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playIcon}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlIcon}>⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  artwork: {
    alignItems: 'center',
    marginBottom: 48,
  },
  artworkPlaceholder: {
    width: 280,
    height: 280,
    borderRadius: 20,
    backgroundColor: '#2d2d44',
  },
  info: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
  },
  progressContainer: {
    marginBottom: 32,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#2d2d44',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    width: '25%',
    height: '100%',
    backgroundColor: '#6c5ce7',
    borderRadius: 2,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 12,
    color: '#a0a0a0',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    padding: 16,
  },
  controlIcon: {
    fontSize: 24,
    color: '#ffffff',
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  playIcon: {
    fontSize: 28,
    color: '#ffffff',
  },
});

export default PlayerScreen;
