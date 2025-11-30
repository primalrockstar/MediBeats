import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * AudioWaveform - Visual waveform display component
 * Displays audio waveform visualization for tracks
 * @param {Array} data - Waveform amplitude data points
 * @param {number} progress - Current playback progress (0-1)
 * @param {string} activeColor - Color for played portion
 * @param {string} inactiveColor - Color for unplayed portion
 */
const AudioWaveform = ({
  data = [],
  progress = 0,
  activeColor = '#6c5ce7',
  inactiveColor = '#2d2d44',
}) => {
  // Generate sample waveform data if none provided
  const waveformData = data.length > 0 ? data : generateSampleWaveform(40);

  return (
    <View style={styles.container}>
      {waveformData.map((amplitude, index) => {
        const isActive = index / waveformData.length < progress;
        return (
          <View
            key={index}
            style={[
              styles.bar,
              {
                height: `${amplitude * 100}%`,
                backgroundColor: isActive ? activeColor : inactiveColor,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

/**
 * Generates sample waveform data for visualization
 * @param {number} count - Number of data points
 * @returns {Array} Array of amplitude values (0-1)
 */
const generateSampleWaveform = (count) => {
  const waveform = [];
  for (let i = 0; i < count; i++) {
    // Generate smooth wave-like pattern
    const base = 0.3 + Math.sin(i * 0.3) * 0.2;
    const variation = Math.random() * 0.3;
    waveform.push(Math.min(1, Math.max(0.1, base + variation)));
  }
  return waveform;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 4,
  },
  bar: {
    width: 3,
    borderRadius: 2,
    minHeight: 4,
  },
});

export default AudioWaveform;
