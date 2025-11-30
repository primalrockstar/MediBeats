import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * MiniPlayer - Compact audio player for bottom navigation
 * Shows current playing track with basic controls
 * @param {string} title - Track title
 * @param {string} artist - Artist/creator name
 * @param {boolean} isPlaying - Playback state
 * @param {function} onPlay - Play handler
 * @param {function} onPause - Pause handler
 * @param {function} onPress - Press handler to expand player
 */
const MiniPlayer = ({
  title,
  artist,
  isPlaying = false,
  onPlay,
  onPause,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.artwork} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
      </View>
      <TouchableOpacity 
        style={styles.playButton}
        onPress={isPlaying ? onPause : onPlay}
      >
        <Text style={styles.playIcon}>{isPlaying ? '⏸' : '▶'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2d2d44',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  artwork: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#3d3d54',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  artist: {
    fontSize: 12,
    color: '#a0a0a0',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  playIcon: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default MiniPlayer;
