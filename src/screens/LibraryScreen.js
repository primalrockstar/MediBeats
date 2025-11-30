import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

/**
 * LibraryScreen - User's saved meditation music collection
 * Displays saved, favorited, and recently played tracks
 */
const LibraryScreen = () => {
  const sections = [
    { id: '1', title: 'Favorites', count: 12 },
    { id: '2', title: 'Recently Played', count: 8 },
    { id: '3', title: 'My Creations', count: 15 },
    { id: '4', title: 'Downloaded', count: 6 },
  ];

  const renderSection = ({ item }) => (
    <View style={styles.sectionCard}>
      <Text style={styles.sectionTitle}>{item.title}</Text>
      <Text style={styles.sectionCount}>{item.count} tracks</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Library</Text>
      </View>
      <FlatList
        data={sections}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
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
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  listContent: {
    paddingHorizontal: 24,
  },
  sectionCard: {
    backgroundColor: '#2d2d44',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  sectionCount: {
    fontSize: 14,
    color: '#a0a0a0',
  },
});

export default LibraryScreen;
